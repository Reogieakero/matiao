import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Register.css';
// NEW: Import for the Checkmark icon (Assuming you use Font Awesome or similar)
// For simplicity, we'll use a simple unicode character for the checkmark in the code below.


const Register = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    // NEW: State for the verification code input
    const [verificationCode, setVerificationCode] = useState(''); 
    // NEW: State to manage the registration flow
    const [step, setStep] = useState(1); // 1: Registration Form, 2: Verification Form
    
    const [passwordRequirements, setPasswordRequirements] = useState([
        { text: "At least 8 characters", valid: false, regex: /.{8,}/ },
        { text: "At least 1 uppercase letter", valid: false, regex: /[A-Z]/ },
        { text: "At least 1 number", valid: false, regex: /[0-9]/ },
        { text: "At least 1 symbol", valid: false, regex: /[^a-zA-Z0-9\s]/ },
    ]);
    
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [errors, setErrors] = useState({});
    const [isEmailChecking, setIsEmailChecking] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); // NEW: To disable buttons during submission
    const navigate = useNavigate();

    const runLiveValidation = (name, value, allValues) => {
        // ... (Keep existing runLiveValidation logic)
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
    
    // ... (Keep existing handleEmailBlur logic)
    const handleEmailBlur = async (e) => {
        const email = e.target.value.trim();
        if (!email) return;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
             setErrors(prev => ({ ...prev, email: 'Please enter a valid email address.' }));
             return;
        }

        setIsEmailChecking(true);
        setErrors(prev => ({ ...prev, email: null })); 

        try {
            await axios.post('http://localhost:3000/auth/check-email', { email });
        } catch (err) {
            const serverMessage = err.response?.data?.message;

            if (serverMessage === 'User already exists.') {
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
        
        if (name === 'email') {
             setErrors(prev => ({ ...prev, email: null }));
        }
    };
    
    const areAllRequirementsMet = () => {
        return passwordRequirements.every(req => req.valid);
    };

    const isFormValid = () => {
        return !errors.email && !isEmailChecking && areAllRequirementsMet() && passwordsMatch && values.username && values.email;
    };


    // MODIFIED: handleSubmit now initiates the verification process (Step 1)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(prev => ({ ...prev, general: null }));

        if (errors.email) {
            setErrors({ general: 'Please resolve the email error before submitting.' });
            return;
        }
        
        if (!isFormValid()) {
            setErrors({ general: 'Please ensure all fields are correctly filled, and passwords match all requirements.' });
            return; 
        }

        setIsSubmitting(true);
        const payload = {
            username: values.username,
            email: values.email,
            password: values.password
        };

        try {
            // Call the new request-verification endpoint
            const response = await axios.post('http://localhost:3000/auth/request-verification', payload);
            
            if (response.status === 200) {
                // If successful, move to the verification step
                setErrors({});
                setStep(2); 
            }
        } catch (err) {
            const serverMessage = err.response?.data?.message;
            let errorMessage = 'Could not send verification code. Try again.';

            if (serverMessage === 'User already exists.') {
                errorMessage = 'The email address is already registered. Please log in.';
                setErrors({ email: errorMessage }); 
            } else {
                errorMessage = serverMessage || errorMessage;
                setErrors({ general: errorMessage });
            }
            console.error('Verification Request Error:', errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    // NEW: Function to handle the verification code submission (Step 2)
    const handleVerifyCode = async (e) => {
        e.preventDefault();
        setErrors(prev => ({ ...prev, general: null }));

        if (verificationCode.length !== 6 || isNaN(verificationCode)) {
            setErrors({ general: 'Please enter the 6-digit code.' });
            return;
        }

        setIsSubmitting(true);

        try {
            // Call the new verify-code endpoint
            const response = await axios.post('http://localhost:3000/auth/verify-code', { 
                email: values.email, 
                code: verificationCode 
            });
            
            if (response.status === 201) {
                alert('Registration successful! Redirecting to login.');
                navigate('/login');
            }
        } catch (err) {
            const serverMessage = err.response?.data?.message;
            let errorMessage = 'Code verification failed. Please check the code and try again.';

            if (serverMessage === 'Invalid or expired verification code.') {
                errorMessage = serverMessage;
            } else {
                errorMessage = serverMessage || errorMessage;
            }
            setErrors({ general: errorMessage });
            console.error('Code Verification Error:', errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };


    const shouldShowChecklist = values.password.length > 0 && !areAllRequirementsMet();

    // RENDER LOGIC: Display Step 1 or Step 2
    const renderForm = () => {
        if (step === 1) {
            // --- REGISTRATION FORM (STEP 1) ---
            return (
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
                            disabled={isSubmitting}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className='form-label-left'>Email Address</label>
                        <input
                            type="email"
                            placeholder='Email'
                            className={`form-input-left ${errors.email || isEmailChecking ? 'input-error' : ''}`}
                            name="email"
                            value={values.email}
                            onChange={handleChanges}
                            onBlur={handleEmailBlur}
                            required
                            disabled={isEmailChecking || isSubmitting}
                        />
                        
                        {isEmailChecking && <p className="validation-error match-error">Checking email availability...</p>} 
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
                            disabled={isSubmitting}
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
                            disabled={isSubmitting}
                        />
                        {!passwordsMatch && values.confirmPassword.length > 0 && 
                            <p className="validation-error match-error">Passwords must match.</p>
                        }
                    </div>
                    <button 
                        type="submit" 
                        className="submit-button-left"
                        disabled={isEmailChecking || errors.email || isSubmitting || !isFormValid()}
                    >
                        {isSubmitting ? 'Sending Code...' : 'Sign Up & Verify Email'}
                    </button>
                </form>
            );
        } else if (step === 2) {
            // --- VERIFICATION CODE FORM (STEP 2) ---
            return (
                <form onSubmit={handleVerifyCode} className="register-form">
                    <h2 className='register-title-left'>Email Verification</h2>
                    <p className='register-subtitle-left'>A 6-digit code has been sent to {values.email}. Please enter it below to complete your registration. The code is valid for 10 minutes.</p>
                    
                    <div className="form-group">
                        <label htmlFor="code" className='form-label-left'>Verification Code</label>
                        <input
                            type="text"
                            placeholder='Enter 6-digit code'
                            className='form-input-left'
                            name="code"
                            maxLength="6"
                            value={verificationCode}
                            // Only allow numbers
                            onChange={(e) => setVerificationCode(e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
                            required
                            disabled={isSubmitting}
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="submit-button-left"
                        disabled={isSubmitting || verificationCode.length !== 6}
                    >
                        {isSubmitting ? 'Verifying...' : 'Complete Registration'}
                    </button>
                    
                    {/* Optional: Add a button to resend the code */}
                    <button 
                        type="button" 
                        className="submit-button-left"
                        onClick={handleSubmit} // Re-use handleSubmit to re-request code
                        style={{ marginTop: '10px', backgroundColor: '#6B7280' }}
                        disabled={isSubmitting}
                    >
                        Resend Code
                    </button>
                </form>
            );
        }
    }

    return (
        
        <div className='register-page-wrapper'>
            
            

            
            <div className='register-content-container'>
                
                <div className='register-left-panel'>
                    
                    <div className="register-form-area">
                        {/* Title changes based on step */}
                        {step === 1 && (
                            <>
                                <h2 className='register-title-left'>Matiao Community</h2>
                                <p className='register-subtitle-left'>Welcome! Join our community to register for upcoming events and updates.</p>
                            </>
                        )}
                        
                        {errors.general && <p className="validation-error general-error">{errors.general}</p>}
                        
                        {/* RENDER THE CORRECT FORM */}
                        {renderForm()}
                        
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