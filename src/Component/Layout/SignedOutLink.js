import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

class SignOutLink extends Component {
    render() {
        return (
            <ul className="right">
                <li><NavLink to="/SignIn">Sign In</NavLink></li>
                <li><NavLink to="/Register">Register</NavLink></li>
            
            </ul>
        )
    }
}

export default SignOutLink
