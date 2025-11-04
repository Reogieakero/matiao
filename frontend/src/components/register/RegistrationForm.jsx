import PasswordChecklist from './PasswordChecklist';

const RegistrationForm = ({
    values,
    errors,
    isSubmitting,
    handleChanges,
    handleSubmit,
    handleEmailBlur,
    isEmailChecking,
    passwordRequirements,
    passwordsMatch,
    areAllRequirementsMet,
    isFormValid,
}) => {
    
    const shouldShowChecklist = values.password.length > 0 && !areAllRequirementsMet();

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
                
                {/* Password Checklist Component */}
                {shouldShowChecklist && (
                    <PasswordChecklist requirements={passwordRequirements} />
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
};

export default RegistrationForm;