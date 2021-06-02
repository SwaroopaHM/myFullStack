import React from "react";
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            error: false,
            errorMessage: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            error: false,
            errorMessage: ""
        }, async () => {
            const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (!emailRegex.test(this.state.email) || this.state.email === '') {
                this.setState({
                    error: true,
                    errorMessage: "Invalid email"
                })
            }
            else if (!(8 <= this.state.password <= 20) || this.state.password === '') {
                this.setState({
                    error: true,
                    errorMessage: "Invalid password"
                })
            }
            else {
                alert("All good")
                const url = 'http://localhost:8080/auth/login';
                
                try {
                    const response = await axios.post(url, {
                        "email": this.state.email,
                        "password": this.state.password
                    })
                    console.log(response.data.token)
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("userId", response.data.userId);

                    this.props.history.push('/dashboard')
                }
                catch (err) {
                    this.setState({
                        error: true,
                        errorMessage: "Something went wrong, please contact Support"
                    })
                }
            }
        })
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        console.log(this.state.errorMessage)
        return (
            <div class="container">
                <div className="header">
                    iJavascript
                </div>
                {this.state.error && <div className="form-error">{this.state.errorMessage}</div>}
                <div className="form-container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input id="email" type="text" value={this.state.email} name="email" className="form-control" onChange={this.handleInput} /> <br />
                        </div>

                        <div className="form-group">
                            <label for="password">Password</label>
                            <input id="password" type="password" value={this.state.password} name="password" className="form-control" onChange={this.handleInput} />
                        </div>
                        <div className="form-footer">
                            <button type="submit" className="form-button">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;