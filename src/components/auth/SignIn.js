import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth, provider } from '../../firebase'
import firebase from 'firebase'
import { selectUserEmail, selectUserName, setActiveUser, setUserLogout, signInUserAsync } from '../../features/auth/authSlice'
import { toast } from 'react-toastify'

const SignIn = () => {
    const [signIn, setSignIn] = useState({
        email: '',
        password: '',
    })

    const dispatch = useDispatch()
    // const userName = useSelector(state => state.auth.userName)
    const authState = useSelector(state => state.auth)
    function handleSignInWithEmailPassword() {
        console.log(signIn)
        dispatch(signInUserAsync({ signIn }))
   
    }
    function handleSignIn() {
        auth.signInWithPopup(provider).catch((error => {
            alert(error.message)
        })).then((result) => {
            console.log(result)
            dispatch(setActiveUser({
                userName: result.user.displayName,
                userEmail: result.user.email,
                userId: result.user.uid
            }))
        })
    }
    function handleSignOut() {
        auth.signOut()
        dispatch(setUserLogout)
    }
    function handleChange(e) {
        const { name, value } = e.target
        setSignIn({ ...signIn, [name]: value })
    }
    function handleSubmit(event) {
        event.preventDefault()
        handleSignInWithEmailPassword()
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
            <div className="section">
                {authState.isSignedIn ? (<button onClick={handleSignOut} className="btn pink-ligthen-1 z-depth-0">Sign out</button>)
                    : (<button onClick={handleSignIn} className="btn pink-ligthen-1 z-depth-0">Sign in with Google</button>)}
            </div>
        </div>

    )
}

export default SignIn

