import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Register.css';
import logoPlaceholder from '../assets/MatiaoLogo.jpg';

const Register = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [passwordRequirements, setPasswordRequirements] = useState([
        { text: "At least 8 characters", valid: false, regex: /.{8,}/ },
        { text: "At least 1 uppercase letter", valid: false, regex: /[A-Z]/ },
        { text: "At least 1 number", valid: false, regex: /[0-9]/ },
        { text: "At least 1 symbol", valid: false, regex: /[^a-zA-Z0-9\s]/ },
    ]);
    
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [errors, setErrors] = useState({});
    const [isEmailChecking, setIsEmailChecking] = useState(false); // NEW: State for loading
    const navigate = useNavigate();

    const runLiveValidation = (name, value, allValues) => {
        if (name === 'password') {
            const updatedRequirements = passwordRequirements.map(req => ({
                ...req,
                valid: req.regex.test(value)
            }));
            setPasswordRequirements(updatedRequirements);

            if (allValues.confirmPassword) {
                 setPasswordsMatch(value === allValues.confirmPassword);
            }

        } else if (name === 'confirmPassword') {
            setPasswordsMatch(value === allValues.password);
        }
    };
    
    // NEW: Function to handle live email existence check on blur
    const handleEmailBlur = async (e) => {
        const email = e.target.value.trim();
        if (!email) return;

        // Basic client-side email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
             setErrors(prev => ({ ...prev, email: 'Please enter a valid email address.' }));
             return;
        }

        setIsEmailChecking(true);
        setErrors(prev => ({ ...prev, email: null })); // Clear previous error

        try {
            // Call the new dedicated backend endpoint
            await axios.post('http://localhost:3000/auth/check-email', { email });
            // If the call succeeds (status 200), do nothing, email is available.

        } catch (err) {
            const serverMessage = err.response?.data?.message;

            if (serverMessage === 'User already exists.') {
                // Display the duplication error message
                setErrors(prev => ({ ...prev, email: 'This email is already registered. Please log in.' }));
            } else {
                console.error("Live Email Check Error:", serverMessage || err.message);
                setErrors(prev => ({ ...prev, general: 'Could not verify email. Try submitting the form.' }));
            }
        } finally {
            setIsEmailChecking(false);
        }
    };


    const handleChanges = (e) => {
        const { name, value } = e.target;
        
        const newValues = { ...values, [name]: value };
        setValues(newValues);
        
        runLiveValidation(name, value, newValues);

        if (errors.general) {
            setErrors(prev => ({ ...prev, general: null }));
        }
        
        // Always clear email error on change so the user can correct it
        if (name === 'email') {
             setErrors(prev => ({ ...prev, email: null }));
        }
    };
    
    const areAllRequirementsMet = () => {
        return passwordRequirements.every(req => req.valid);
    };

    const isFormValid = () => {
        // Prevent form submission if a known email error exists or check is running
        return !errors.email && !isEmailChecking && areAllRequirementsMet() && passwordsMatch && values.username && values.email;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(prev => ({ ...prev, general: null })); // Clear only general errors

        if (errors.email) {
            setErrors({ general: 'Please resolve the email error before submitting.' });
            return;
        }
        
        if (!isFormValid()) {
            setErrors({ general: 'Please ensure all fields are correctly filled, and passwords match all requirements.' });
            return; 
        }

        const payload = {
            username: values.username,
            email: values.email,
            password: values.password
        };

        try {
            const response = await axios.post('http://localhost:3000/auth/register', payload);
            
            if (response.status === 201) {
                navigate('/login');
            }
        } catch (err) {
            const serverMessage = err.response?.data?.message;
            let errorMessage = 'Registration failed. Check server status or try again.';

            if (serverMessage === 'User already exists.') {
                // Final safety check for duplication
                errorMessage = 'The email address is already registered. Please log in.';
                setErrors({ email: errorMessage }); 
            } else {
                errorMessage = serverMessage || errorMessage;
                setErrors({ general: errorMessage });
            }
            console.error('Registration Error:', errorMessage);
        }
    };

    const shouldShowChecklist = values.password.length > 0 && !areAllRequirementsMet();

    return (
        
        <div className='register-page-wrapper'>
            
            <div className='absolute-logo-container'>
                <img 
                    src={logoPlaceholder} 
                    alt="Matiao Community Logo" 
                    className="matiao-absolute-logo" 
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/1a4570/FFFFFF?text=Logo" }}
                />
            </div>

            
            <div className='register-content-container'>
                
                <div className='register-left-panel'>
                    
                    <div className="register-form-area">
                        <h2 className='register-title-left'>Matiao Community</h2>
                        <p className='register-subtitle-left'>Welcome! Join our community to register for upcoming events and updates.</p>
                        
                        {errors.general && <p className="validation-error general-error">{errors.general}</p>}

                        <form onSubmit={handleSubmit} className="register-form">
                            <div className="form-group">
                                <label htmlFor="username" className='form-label-left'>Username</label>
                                <input
                                    type="text"
                                    placeholder='Username'
                                    className='form-input-left'
                                    name="username"
                                    value={values.username}
                                    onChange={handleChanges}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className='form-label-left'>Email Address</label>
                                <input
                                    type="email"
                                    placeholder='Email'
                                    // Highlight input if an error exists or if checking is in progress
                                    className={`form-input-left ${errors.email || isEmailChecking ? 'input-error' : ''}`}
                                    name="email"
                                    value={values.email}
                                    onChange={handleChanges}
                                    onBlur={handleEmailBlur} // KEY: Runs the check when field loses focus
                                    required
                                    disabled={isEmailChecking}
                                />
                                
                                {isEmailChecking && <p className="validation-error match-error">Checking email availability...</p>} 
                                {/* Display Email Duplication Error below the field */}
                                {errors.email && <p className="validation-error match-error">{errors.email}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className='form-label-left'>Password</label>
                                <input
                                    type="password"
                                    placeholder='Create a Password'
                                    className={`form-input-left ${values.password.length > 0 && !areAllRequirementsMet() ? 'input-error' : ''}`}
                                    name="password"
                                    value={values.password}
                                    onChange={handleChanges}
                                    required
                                />
                                
                                {shouldShowChecklist && (
                                    <div className="password-checklist">
                                        {passwordRequirements.map((req, index) => (
                                            <p key={index} className={`checklist-item ${req.valid ? 'valid' : 'invalid'}`}>
                                                <span className='icon'>{req.valid ? '✓' : '✗'}</span> {req.text}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="confirmPassword" className='form-label-left'>Confirm Password</label>
                                <input
                                    type="password"
                                    placeholder='Confirm Password'
                                    className={`form-input-left ${!passwordsMatch && values.confirmPassword.length > 0 ? 'input-error' : ''}`}
                                    name="confirmPassword"
                                    value={values.confirmPassword}
                                    onChange={handleChanges}
                                    required
                                />
                                {!passwordsMatch && values.confirmPassword.length > 0 && 
                                    <p className="validation-error match-error">Passwords must match.</p>
                                }
                            </div>
                            <button 
                                type="submit" 
                                className="submit-button-left"
                                disabled={isEmailChecking || errors.email} // Disable if checking or if email is invalid
                            >
                                Sign Up
                            </button>
                        </form>
                        
                        <div className="login-link-section-left">
                            <span>Already have an account?</span>
                            <Link to='/login' className='login-link-left'>Log in</Link>
                        </div>
                    </div>
                </div>

                <div className='register-right-panel'>
                    <div className="right-panel-content">
                        <h1 className='right-panel-title'>
                            Empowering Youth, Building Community.
                        </h1>
                        <p className='right-panel-text'>
                            Lakas ng Kabataan, Susi sa Kaunlaran. Register now to participate in our next event!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;