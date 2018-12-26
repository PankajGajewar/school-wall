import React, { Component } from 'react';

import { browserHistory, Link } from 'react-router';

class ChangePasswordComponent extends Component {

    state = {
        old_password: '',
        new_password: '',
        con_password: ''
    }

    changePassword = () => {
        console.log("Old Username: ", this.state.old_password);
        console.log("New Password: ", this.state.new_password);
        console.log("Confirm Password: ", this.state.con_password);
        if (this.state.new_password === this.state.con_password) {
            alert("OK");
       
            browserHistory.push('/dashboard');
        }
        else {
            alert("Passwod Not Matches");
        }
    }

    oldPasswordHandler = (event) => {
        this.setState(
            { old_password: event.target.value }
        );
    }

    newPasswordHandler = (event) => {
        this.setState(
            { new_password: event.target.value }
        );
    }

    conPasswordHandler = (event) => {
        this.setState(
            { con_password: event.target.value }
        );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <div className="card border-0">
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Old Password</label><span className="text-danger">*</span>
                                        <input className="form-control" type="password" required
                                            onChange={this.oldPasswordHandler} value={this.state.old_password}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>New Password</label><span className="text-danger">*</span>
                                        <input className="form-control" type="password" required
                                            onChange={this.newPasswordHandler} value={this.state.new_password}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Confirm Password</label><span className="text-danger">*</span>
                                        <input className="form-control" type="password" required
                                            onChange={this.conPasswordHandler} value={this.state.con_password}></input>
                                    </div>
                                    <button type="submit" onClick={this.changePassword} className="btn btn-success">Change Password</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChangePasswordComponent;