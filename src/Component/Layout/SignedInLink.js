import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import {connect } from 'react-redux'

class SignInLink extends Component {

    handleClick = (e) => {
        e.preventDefault();
        this.props.logOut();
    }


    render() {

        const{firstname,
                lastname} = this.props.activeUser
        return (
            <ul className="right">
                <li><NavLink to="/" onClick={this.handleClick}>Log Out</NavLink></li>
                <li>{this.props.isLoggedin &&
                    <NavLink to="/" className="btn btn-floating pink lighten-1">{firstname.charAt(0)+lastname.charAt(0)}</NavLink>}</li>
                    
            
            </ul>
        )
    }
}



const mapStateToProps = (state) => {

    return {
        isLoggedin:state.isLoggedin,
        activeUser: state.activeUser
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return  {
        logOut: () =>{dispatch ({ type:"LOGOUT"}) }
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(SignInLink)


