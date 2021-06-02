import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth, provider } from '../../firebase'
import { selectUserEmail, selectUserName, setActiveUser, setUserLogout } from '../../features/auth/authSlice'

const SignIn = () => {
    auth.onAuthStateChanged((user)=> {
        if (user) {

        } else {
            console.log('No user is signed in')
        }
    })
    const dispatch = useDispatch()
    // select a reducer
   
    const userName = useSelector(state => state.auth.userName)
    // const userEmail = useSelector(selectUserEmail)

    const [signIn, setSignIn] = useState({
        email: '',
        password: '',
    })
    function handleSignIn() {
        auth.signInWithPopup(provider).catch((error => {
            alert(error.message)
        })).then((result) => {
            dispatch(setActiveUser({
                userName: result.user.displayName,
                userEmail: result.user.email,
                userId: result.user.uid
            }))
        })
    }
    function handleSignOut() {
        auth.signOut().then(() => {
            dispatch(setUserLogout)
        }).catch(error => console.log(error))
    }
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
            <div className="section">
                {userName ? (<button onClick={handleSignOut} className="btn pink-ligthen-1 z-depth-0">Sign out</button>)
                : (<button onClick={handleSignIn} className="btn pink-ligthen-1 z-depth-0">Sign in with Google</button>)}
                
            </div>
        </div>
    )
}

export default SignIn

