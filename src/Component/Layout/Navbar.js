import React from 'react'
import {Link} from 'react-router-dom';
import {connect } from "react-redux"
import SignInLink from "./SignedInLink";
import SignOutLink from "./SignedOutLink"
function Navbar(props) {
    return (
       
           <nav className="nav-wrapper grey darken-3">
                <div className="container">
                <Link to="/" className= "brand-logo">
                        Navigation Plan
                        </Link>
                    <ul className="right">
                    <li>
                        <Link to="/AboutUs">
                        About
                        </Link>
                    </li>
                    <li>
                        <Link to="/ContactUs">
                        Contact
                        </Link>
                    </li>
                      <li>{props.isLoggedin? <SignInLink/> : <SignOutLink/>}</li>
                    

                    </ul>
                  

                </div>
           </nav> 
        
    )
}


const mapStateToProps =(state) => 
{
    return {
        isLoggedin : state.isLoggedin
    }

}

export default connect(mapStateToProps)(Navbar)


