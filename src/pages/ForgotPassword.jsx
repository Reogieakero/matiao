import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/Login.css'; // Reuse same styling

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const res = await axios.post('http://localhost:3000/auth/forgot-password', { email });
      setMessage(res.data.message || 'Password reset link sent! Check your email.');
    } catch (err) {
      setError(err.response?.data?.message || 'Error sending reset link.');
    }
  };

  return (
    <div className="login-page-wrapper centered">
      <div className="login-content-container">
        <div className="login-left-panel">
          <div className="login-form-area">
            <h2 className="login-title-left">Forgot Password?</h2>
            <p className="login-subtitle-left">Enter your email to reset your password.</p>

            {message && <p className="validation-success general-success">{message}</p>}
            {error && <p className="validation-error general-error">{error}</p>}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email" className="form-label-left">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-input-left"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="submit-button-left">Send Reset Link</button>
            </form>

            <div className="register-link-section-left">
              <Link to="/login" className="register-link-left">Back to Login</Link>
            </div>
          </div>
        </div>

        <div className="login-right-panel">
          <div className="right-panel-content">
            <h1 className="right-panel-title">Reset and Reconnect.</h1>
            <p className="right-panel-text">We’ll help you get back into your account.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
