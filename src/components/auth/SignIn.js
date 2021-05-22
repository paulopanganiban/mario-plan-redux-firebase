import React, { useState } from 'react'

const SignIn = () => {
    const [signIn, setSignIn] = useState({
        email: '',
        password: '',
    })
    function handleChange(e) {
        const { name, value } = e.target
        setSignIn({ ...signIn, [name]: value })
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log('email', signIn.email, 'password', signIn.password)
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign in</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input name="email" value={signIn.email} type="email" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input name="password" value={signIn.password} type="password" id="password" onChange={handleChange} />
                </div>
                <button className="btn pink-ligthen-1 z-depth-0">Login</button>
            </form>
        </div>
    )
}

export default SignIn
