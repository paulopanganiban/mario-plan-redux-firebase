import React, { useState } from 'react'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const emailValue = (event) => {
        setEmail(event.target.value)
    }
    function passwordValue(event) {
        setPassword(event.target.value)
    }
    function firstNameValue(event) {
     setFirstName(event.target.value)
    }
    function lastNameValue(event) {
        setLastName(event.target.value)
       }
    function handleSubmit(event) {
        event.preventDefault()
        console.log(firstName, lastName)
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={emailValue}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={passwordValue}/>
                    <label htmlFor="password">Password</label>
                    <input type="text" id="firstName" onChange={firstNameValue}/>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="lastName" onChange={lastNameValue}/>
                    <label htmlFor="lastName">Last Name</label>
                    <button className="btn pink-ligthen-1 z-depth-0">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
