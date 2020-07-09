import React, { Component } from 'react';


class CreateUser2 extends Component{
    constructor(props){
        super(props)

        this.state = {
            email: window.localStorage.getItem('emailForSignIn'),
            password: ''
        }
    }

    handleEmailChanged = (evt) => {
        this.setState({email: evt.target.value})
        console.log(this.state)
    }

    handlePasswordChanged = (evt) => {
        this.setState({password: evt.target.value})
        console.log(this.state)
    }


    enrollUser = () => {
        alert(this.state)
    }




    render() {
        return(
            <form>
                <div>
                    <label>email</label>
                    <br />
                    <input type = 'text' value = {this.state.email}
                    onChange = {this.handleEmailChanged} />
                </div>
                <div>
                    <label>password</label>
                    <br />
                    <input type = 'password' value = {this.state.password}
                    onChange = {this.handlePasswordChanged} />
                </div>
                <button type='button' onClick={this.enrollUser}>submit</button>
            </form>
        )
    }
}






  export default CreateUser2;
