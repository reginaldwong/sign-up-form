import React from 'react'

function InputForm() {
    return (
        <div>
            <input type="text" className="first-name" placeholder='First Name'/>
            <input type="text" className="last-name" placeholder='Last Name'/>
            <input type="email" className="email" placeholder='Email Address'/>
            <input type="password" className="password" placeholder='Password'/>
            <button className="claim-button">Claim your free trial</button>
            <p>By clicking the button, you are agreeing to our Terms and Services</p>
        </div>
    )
}

export default InputForm;
