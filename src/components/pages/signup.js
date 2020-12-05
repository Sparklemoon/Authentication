import React, { Component } from 'react';
import Cookies from "js-cookie";

export default class SignUp extends Component {
    constructor() {
        super()

        this.state = {
            username: "",
            password: "",
            passwordConfirm: "",
            error: false,
            passwordError: false,
            usernameError: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()

        if (this.state.password === this.state.passwordConfirm)
        fetch("http://127.0.0.1:5000/user/add", {
            method: "POST",
            headers: { "content-type" : "application/json"},
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data === "User added good job") {
                Cookies.set("username", this.state.username)
                this.props.history.push("/")
            }
            else if (data === "User already exists") {
                this.setState({ usernameError: true})
            }

            else {
                this.setState({ error: true })
            }

        })
        .catch(error => {
            console.log("error created user", error)
            this.setState({ error: true})
        })
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div className='signup-wrapper'>
              <h3>Sign Up:</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                        name="username" 
                        value={this.state.username} 
                        onChange={this.handleChange} 
                        placeholder="Username"
                    />

                    <input type="password" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        placeholder="Password"
                    />
                    <input type="password" 
                        name="passwordConfirm" 
                        value={this.state.passwordConfirm} 
                        onChange={this.handleChange} 
                        placeholder="Confirm Password"
                    />


                    <button type="submit">sign up</button>
                </form>
                {this.state.error ? <p>Error signing up!</p> : null}
                {this.state.passwordError ? <p>no match</p> : null}
                {this.state.usernameError ? <p>no match username</p> : null}
            </div>
            
        )}
    }
