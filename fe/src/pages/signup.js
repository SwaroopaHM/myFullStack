import React from "react";
import axios from 'axios';

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            error: false,
            errorMessage: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            error: false,
            errorMessage: ""
        }, async () => {
            const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (!emailRegex.test(this.state.email)) {
                this.setState({
                    error: true,
                    errorMessage: "Invalid email id"
                })
            }
            else if (!(8 <= this.state.password <= 20)) {
                this.setState({
                    error: true,
                    errorMessage: "Invalid password"
                })
            }
            else if (this.state.password !== this.state.confirmPassword) {
                this.setState({
                    error: true,
                    errorMessage: "Password missmatch"
                })
            }
            else {
                const url = 'http://localhost:8080/auth/signup';
                try {
                    const response = await axios.post(url, {
                        "name": this.state.name,
                        "email": this.state.email,
                        "password": this.state.password
                    })
                    console.log(response)
                    this.props.history.push('/')
                }
                catch (err) {
                    this.setState({
                        error: true,
                        errorMessage: "Failed to post"
                    })
                }
            }
        })
    }

    handleInput = (e) => {
        console.log(e)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div class="container">
                <div className="header">
                    iJavascript
                </div>
                {this.state.error && <div className="form-error">{this.state.errorMessage}</div>}
                <div className="form-container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" value={this.state.name} name="name" className="form-control" onChange={this.handleInput} /> <br />
                        </div>

                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="text" value={this.state.email} name="email" className="form-control" onChange={this.handleInput} /> <br />
                        </div>

                        <div className="form-group">
                            <label for="password">Password</label>
                            <input id="password" type="password" value={this.state.password} name="password" className="form-control" onChange={this.handleInput} />
                        </div>

                        <div className="form-group">
                            <label for="confirmPassword">Confirm Password</label>
                            <input id="confirmPassword" type="password" value={this.state.confirmPassword} name="confirmPassword" className="form-control" onChange={this.handleInput} />
                        </div>
                        <button type="submit" className="form-button">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUp;