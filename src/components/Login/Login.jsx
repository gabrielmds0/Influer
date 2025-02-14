import React from 'react';
import { Person, Lock, Visibility, VisibilityOff, Google } from '@mui/icons-material';
import './Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-with-icon">
              <Person className="input-icon" />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
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
          <button className="google-login">
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
    </div>
  );
};

export default Login;
