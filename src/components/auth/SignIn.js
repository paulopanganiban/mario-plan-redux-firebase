import React, { useState } from 'react'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const emailValue = (event) => {
        setEmail(event.target.value)
    }
    function passwordValue(event) {
        setPassword(event.target.value)
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log('email', email, 'password', password)
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign in</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={emailValue}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={passwordValue}/>
                    <button className="btn pink-ligthen-1 z-depth-0">Login</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn
