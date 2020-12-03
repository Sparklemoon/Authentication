import React, { Component } from 'react'
import Cookies from "js-cookie"

export default class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()

        Cookies.set("username", this.state.username)
    }

    render() {
        return (
            <div className='login-wrapper'>
                <h3>Login:</h3>
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

                    <button type="submit">Login</button>
                </form>
            </div>
        )}
    }
