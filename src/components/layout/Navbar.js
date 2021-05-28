import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
const Navbar = () => {
    const userName = useSelector(state => state.auth.userName)
    console.log(userName)
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Mario Plan</Link>
                {!userName ? (
                    <SignedOutLinks />
                ) : (
                    <SignedInLinks />
                )}


            </div>
        </nav>
    )
}

export default Navbar
