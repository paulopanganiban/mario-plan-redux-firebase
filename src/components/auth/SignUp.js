import React, { useState } from 'react'
import { auth } from '../../firebase';

const SignUp = () => {
    const [signUp, setSignUp] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    })
    auth().createUserWithEmailAndPassword(signUp.email, signUp.password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });

    function handleChange(e) {
        const { name, value } = e.target
        setSignUp({ ...signUp, [name]: value })
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log(signUp)
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input name="email" value={signUp.email} type="email" id="email" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input name="password" value={signUp.password} type="password" id="password" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input name="firstName" value={signUp.firstName} type="text" id="firstName" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input name="lastName" value={signUp.lastName} type="text" id="lastName" onChange={handleChange} />
                </div>
                <button className="btn pink-ligthen-1 z-depth-0">Sign Up</button>
            </form>
        </div >
    )
}

export default SignUp
