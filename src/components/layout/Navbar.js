import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
const Navbar = () => {
    const authState = useSelector(state => state.auth)
    
    const links = authState.isSignedIn ? <SignedInLinks/> : <SignedOutLinks/>
    
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Mario Plan</Link>
              { links }
            </div>
        </nav>
    )
}

export default Navbar
