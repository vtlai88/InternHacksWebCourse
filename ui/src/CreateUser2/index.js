import React, { Component } from 'react';
import axios from 'axios';


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
        alert(JSON.stringify(this.state))

        //Handling a Reponse https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/
        //Once an HTTP request is made, Axios returns a promise that is either fulfilled or rejected, 
        //depending on the response from the backend service. To handle the result, you can use the then() method like this:

        axios.post('http://localhost:8080/createUser', this.state)
          .then((response) => {
            alert(response);
          }, (error) => {
            console.log(error);
          });

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
