import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Person, Lock, Visibility, VisibilityOff, Google } from '@mui/icons-material';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from '../firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Get the redirect path from location state or default to dashboard
      const from = location.state?.from?.pathname || '/dashboard';
      navigate(from, { replace: true });
      
      toast.success('Login successful!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });

    } catch (error) {
      console.error("Error logging in:", error);
      toast.error(`Login failed: ${error.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      
      const result = await signInWithPopup(auth, provider);
      console.log("Successfully logged in with Google!", result.user);

      // Check if user exists in Firestore
      const userDoc = await getDoc(doc(db, 'users', result.user.uid));
      
      if (!userDoc.exists()) {
        // Create initial user document with Google auth data
        await setDoc(doc(db, 'users', result.user.uid), {
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
          profileComplete: false,
          createdAt: new Date()
        });
        
        navigate('/profile-setup');
        toast.info('Please complete your profile setup', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      } else {
        // User exists, redirect to dashboard or original destination
        const from = location.state?.from?.pathname || '/dashboard';
        navigate(from, { replace: true });
        toast.success('Successfully logged in with Google!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }

    } catch (error) {
      console.error("Error with Google login:", error);
      let errorMessage = 'Google login failed';
      
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          errorMessage = 'Login cancelled - popup was closed';
          break;
        case 'auth/popup-blocked':
          errorMessage = 'Popup was blocked by the browser';
          break;
        default:
          errorMessage = error.message;
      }
      
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-with-icon">
              <Person className="input-icon" />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-with-icon">
              <Lock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </button>
            </div>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="login-options">
          <button 
            type="button"
            className="google-login"
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            <Google className="google-icon" />
            Continue with Google
          </button>
          <a href="/forgot-password" className="forgot-password">
            Forgot password?
          </a>
          <p className="signup-text">
            Don't have an account? <a href="/register">Sign up</a>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
