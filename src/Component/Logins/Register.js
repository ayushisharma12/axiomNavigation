import React, { Component } from 'react'
import {connect } from "react-redux"

class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            firstname:"",
            lastname:"",
             email: "",
             password:""
        }
    }
    


    handleChange = (e)=> {
        e.preventDefault();
        this.setState({[e.target.id]:e.target.value})
    }
    handleSubmit = (e)=> {
        e.preventDefault();
        this.props.register(this.state);
        this.props.history.replace("/");

    }



    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darkern 5"> Reistration </h5>
                    <div className="input-field">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="firstname" value={this.state.firstname} onChange={this.handleChange}/>
                    </div>
                   <div className="input-field">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id="lastname" value={this.state.lastname} onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={this.state.email} onChange={this.handleChange}/>
                    
                    </div>
                    <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="Password" id="password" value={this.state.password} onChange={this.handleChange}/>
                    <div className="input-field">
                    <button className="btn pink lighten-1" onClick={this.handleSubmit}>Register</button>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) =>
{
    return  {
        register: (details) =>{dispatch ({ type:"DOREGISTER",
        payload:details}) }
    }

}
export default connect(null,mapDispatchToProps)(Register)
