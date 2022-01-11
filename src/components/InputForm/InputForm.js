import React from 'react'
import './InputForm.css'

const InputForm = () => {
    return (
        <form className='input-container'>
            <div className="input-group">
            <input type="text" className="first-name input-field" placeholder='First Name'/>
            {/* <p><small className="error-text">First Name cannot be empty</small></p> */}
            </div>
            <div className="input-group">
            <input type="text" className="last-name input-field" placeholder='Last Name'/>
            {/* <p><small className="error-text">Last Name cannot be empty</small></p> */}
            </div>
            <div className="input-group">
            <input type="email" className="email input-field" placeholder='Email Address'/>
            {/* <p><small className="error-text">Looks like this is not an email</small></p> */}
            </div>
            <div className="input-group">
            <input type="password" className="password input-field" placeholder='Password'/>
            {/* <p><small className="error-text">Password cannot be empty</small></p> */}
            </div>
            <button type="submit" className="claim-button input-field">Claim your free trial</button>
            <p className='disclaimer'>By clicking the button, you are agreeing to our <a href="#" className="terms-services">Terms and Services</a></p>
        </form>
    )
}

export default InputForm;
