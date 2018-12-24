import React, { Component } from 'react';

import { browserHistory } from 'react-router';

class LoginComponent extends Component {

    state = {
        username: '',
        password: ''
    }

    login = () => {

        if (this.state.username === this.state.password) {
            console.log("clicked");
            console.log("Username: ", this.state.username);
            console.log("Password: ", this.state.password);
            browserHistory.push('/dashboard');
        }
        // else {
        //     // browserHistory.push('/login');
        //     return null;
        // }
    }

    usernameHandler = (event) => {
        this.setState(
            { username: event.target.value }
        );
    }

    passwordHandler = (event) => {
        this.setState(
            { password: event.target.value }
        );
    }

    render() {
        return (
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-4 mx-auto">
                        <div className="card">
                            <div className="card-header h2 text-center bg-secondary text-white">
                                Login
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Email ID</label><span className="text-danger">*</span>
                                        <input className="form-control" type="email" required
                                            onChange={this.usernameHandler} value={this.state.username}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label><span className="text-danger">*</span>
                                        <input className="form-control" type="password" required
                                            onChange={this.passwordHandler} value={this.state.password}></input>
                                    </div>
                                    <button type="submit" onClick={this.login} className="btn btn-success">Login</button>
                                    {/* <Link className="btn btn-success" to="/home" onClick="return this.login()">Login</Link> */}
                                    {/* <div className="row">
                                        <div className="col-md-6 text-right">
                                            <button className="btn btn-success">Login</button>
                                        </div>
                                        <div className="col-md-6 text-left">
                                            <button type="reset" className="btn btn-secondary">Reset</button>
                                        </div>
                                    </div> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent;