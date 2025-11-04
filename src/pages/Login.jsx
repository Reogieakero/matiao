import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Login.css'; 

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('http://localhost:3000/auth/login', values);
      if (response.status === 200) {
        navigate('/home');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Login failed. Please check your credentials.';
      console.error('Login Error:', errorMessage);
      setError(errorMessage);
    }
  };

  return (
    <div className='login-page-wrapper centered'>
      <div className='login-content-container'>
        <div className='login-left-panel'>
          <div className="login-form-area">
            <h2 className='login-title-left'>Welcome Back!</h2>
            <p className='login-subtitle-left'>Sign in to your Matiao Community account.</p>

            {error && <p className="validation-error general-error">{error}</p>}

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email" className='form-label-left'>Email Address</label>
                <input
                  type="email"
                  placeholder='Email'
                  className='form-input-left'
                  name="email"
                  value={values.email}
                  onChange={handleChanges}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className='form-label-left'>Password</label>
                <input
                  type="password"
                  placeholder='Password'
                  className='form-input-left'
                  name="password"
                  value={values.password}
                  onChange={handleChanges}
                  required
                />
              </div>

              <button type="submit" className="submit-button-left">Log In</button>
            </form>

            <div className="register-link-section-left">
              <span>Don&apos;t have an account?</span>
              <Link to='/register' className='register-link-left'>Sign up</Link>
            </div>
          </div>
        </div>

        <div className='login-right-panel'>
          <div className="right-panel-content">
            <h1 className='right-panel-title'>Empowering Youth, Building Community.</h1>
            <p className='right-panel-text'>Lakas ng Kabataan, Susi sa Kaunlaran.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
    