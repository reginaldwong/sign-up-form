import React from 'react'
import './InputForm.css'

const InputForm = () => {
    return (
        <div className='input-container'>
            <input type="text" className="first-name input-field" placeholder='First Name'/>
            <input type="text" className="last-name input-field" placeholder='Last Name'/>
            <input type="email" className="email input-field" placeholder='Email Address'/>
            <input type="password" className="password input-field" placeholder='Password'/>
            <button type="submit" className="claim-button input-field">Claim your free trial</button>
            <p className='disclaimer'>By clicking the button, you are agreeing to our <a href="#" className="terms-services">Terms and Services</a></p>
        </div>
    )
}

export default InputForm;
