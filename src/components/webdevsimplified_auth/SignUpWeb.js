import { toast } from 'react-toastify'
import React, { useRef, useEffect, useState } from 'react'
import { auth } from '../../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveUser, signUpUserAsync } from '../../features/auth/authSlice'
import { useHistory } from 'react-router'
const SignUpWeb = () => {
    let history = useHistory()
    const authState = useSelector(state => state.auth)
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        const unsubscribe =
            auth.onAuthStateChanged(user => {
                console.log(user)
                dispatch(setActiveUser(user))
            })
        return unsubscribe
    }, [])

    const emailRef = useRef()
    const passwordRef = useRef()
    const password2Ref = useRef()
    function handleSubmit(event) {
        event.preventDefault()
        if (passwordRef.current.value !== password2Ref.current.value) {
            return setError("Passwords do not match")
        }
        if (passwordRef.current.value === password2Ref.current.value) {
            dispatch(signUpUserAsync(emailRef.current.value, 
                passwordRef.current.value)   
            )
        }
        if (authState.isSignedIn === true) {
            history.push('/')
        }
       
    }
 
    return (
        <div className="container">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">Sign Up</span>
                </div>
                <form onSubmit={handleSubmit} className="white">
                    {error && <div class="alert card red lighten-4 red-text text-darken-4">
                        <div class="card-content">
                            <p><i class="material-icons"></i><span>Passwords do not match</span></p>
                        </div>
                    </div>}
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input name="email" ref={emailRef}
                            type="email"
                            id="email"
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input name="password" ref={passwordRef}
                            type="password"
                            id="password"
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password2">Password Confirmation</label>
                        <input name="password2" ref={password2Ref}
                            type="password"
                            id="password2"
                        />
                    </div>
                    <button disabled={authState.loading} type="submit" className="btn pink-ligthen-1 z-depth-0">Sign Up</button>
                </form>
                <div class="card-action">

                    <a href="#">Sign in with Google</a>
                    <a href="#">Already have an account?</a>
                </div>
            </div>
        </div>
    )
}

export default SignUpWeb
