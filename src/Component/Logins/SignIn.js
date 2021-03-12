import React, { Component } from 'react'
import {connect} from "react-redux";
class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
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
        if(this.state.email !== "" && this.state.password !== "" )
       {this.props.signIn(this.state.email,this.state.password)}
        this.props.history.replace("/");
    }

  

    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darkern 5"> Sign In</h5>
                    <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="Password" id="password" value={this.state.password} onChange={this.handleChange}/>
                    <div className="input-field">
                    <button className="btn pink lighten-1">Login</button>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps =(state) => 
{
    return {
        isLoggedin : state.isLoggedin
    }

}


const mapDispatchToProps = (dispatch) =>
{
    return  {
        signIn: (email,password) =>{dispatch ({ type:"DOSIGNIN",email:email,password:password}) }
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
