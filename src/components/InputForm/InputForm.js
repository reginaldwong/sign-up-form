import React from 'react'
import './InputForm.css'

function InputForm() {
    return (
        <div className='input-container'>
            <input type="text" className="first-name" placeholder='First Name'/>
            <input type="text" className="last-name" placeholder='Last Name'/>
            <input type="email" className="email" placeholder='Email Address'/>
            <input type="password" className="password" placeholder='Password'/>
            <button type="button" className="claim-button">Claim your free trial</button>
            <p className='disclaimer'>By clicking the button, you are agreeing to our <span className="terms-services">Terms and Services</span></p>
        </div>
    )
}

export default InputForm;
