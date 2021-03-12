import React from 'react';
import {connect } from "react-redux"

function DashBoard(props) {

    return (
        <div className="dashboard container">
            {props.isLoggedin? <h1>Hello {props.activeUser.firstname} , Welcome to the world of Navigation. </h1>
            :<h1>Hello Guest, Try signing In or Registering yourself.</h1>}
        </div>
    )
}


const mapStateToProps = (state) => {

    return {
        isLoggedin:state.isLoggedin,
        activeUser:state.activeUser
 
    }
}
export default connect(mapStateToProps)(DashBoard)
