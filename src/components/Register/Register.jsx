import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Person, Lock, Visibility, VisibilityOff, Google, Email } from '@mui/icons-material';
import { serverTimestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Firebase registration function placeholder
  const handleRegister = async (e) => {
    e.preventDefault();
    
    try {
      if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
      }
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCredential.user.uid), {
        fullName,
        email,
        createdAt: serverTimestamp()
      });

      toast.success('Registration successful!', {
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

      // Redirect to profile setup after a short delay
      setTimeout(() => {
        navigate('/profile-setup', { state: { userId: userCredential.user.uid } });
      }, 2000);

    }
    
    catch (error) {
      console.error("Error registering user:", error);
      toast.error(`Registration failed: ${error.message}`, {
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

  // Google sign-up function
  const handleGoogleSignUp = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      
      const result = await signInWithPopup(auth, provider);
      
      // Store user data in Firestore
      await setDoc(doc(db, "users", result.user.uid), {
        fullName: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp(),
        provider: 'google'
      }, { merge: true });

      toast.success('Successfully signed up with Google!', {
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

      // Redirect to profile setup after a short delay
      setTimeout(() => {
        navigate('/profile-setup', { state: { userId: result.user.uid } });
      }, 2000);

    } catch (error) {
      console.error("Error with Google sign up:", error);
      let errorMessage = 'Google sign up failed';
      
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          errorMessage = 'Sign up cancelled - popup was closed';
          break;
        case 'auth/popup-blocked':
          errorMessage = 'Popup was blocked by the browser';
          break;
        case 'auth/account-exists-with-different-credential':
          errorMessage = 'An account already exists with this email';
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
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Create Account</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <div className="input-with-icon">
              <Person className="input-icon" />
              <input
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                onChange={(e)=> setFullName(e.target.value)} 
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-with-icon">
              <Email className="input-icon" />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                onChange={(e)=> setEmail(e.target.value)} 
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
                placeholder="Create a password"
                onChange={(e)=> setPassword(e.target.value)}
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="input-with-icon">
              <Lock className="input-icon" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm your password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </button>
            </div>
          </div>
          <button type="submit" className="register-button">
            Create Account
          </button>
        </form>
        <div className="register-options">
          <button 
            className="google-register" 
            onClick={handleGoogleSignUp}
            disabled={loading}
          >
            <Google className="google-icon" />
            Sign up with Google
          </button>
          <p className="login-text">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
    
  );
};

export default Register;
