import React, { Component } from 'react';

import { browserHistory } from 'react-router';

class ProfileComponent extends Component {

    state = {
        fname: 'Pankaj',
        lname: 'Gajewar',
        dob: '1996-12-20'
    }

    saveChanges = () => {
        console.log("fname: ", this.state.fname);
        console.log("lname: ", this.state.lname);
        console.log("dob: ", this.state.dob);
        alert("Changes Saved");
        browserHistory.push('/dashboard');
    }

    fnameHandler = (event) => {
        this.setState(
            { fname: event.target.value }
        );
    }

    lnameHandler = (event) => {
        this.setState(
            { lname: event.target.value }
        );
    }

    dobHandler = (event) => {
        this.setState(
            { dob: event.target.value }
        );
    }

    render() {
        return (
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <div className="card border-0">
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name</label><span className="text-danger">*</span>
                                        <input className="form-control" type="text" required
                                            onChange={this.fnameHandler} value={this.state.fname}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label><span className="text-danger">*</span>
                                        <input className="form-control" type="text" required
                                            onChange={this.lnameHandler} value={this.state.lname}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Date of Birth</label><span className="text-danger">*</span>
                                        <input className="form-control" type="date" required
                                            onChange={this.dobHandler} value={this.state.dob}></input>
                                    </div>
                                    <button type="submit" onClick={this.saveChanges} className="btn btn-success">Save Changes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ProfileComponent;