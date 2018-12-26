import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './Leaves.css';

class LeavesComponent extends Component {

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
                <div className="col-md-8 mx-auto">
                    <div className="card m-2">
                        <div className="card-body">
                            <div className="row">
                            <div className="col-md-2 my-auto">
                                <b>Leave Date<br></br>27 Mar 2018</b>
                            </div>
                            <div className="col-md-10">
                                <p className="font-weight-bold text-left">Reason for Leave</p>
                                <p className="description pl-2 text-justify">

                                    description
                                    
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Loop */}
                <div className="col-md-8 mx-auto">
                    <div className="card m-2">
                        <div className="card-body">
                            <div className="row">
                            <div className="col-md-2 my-auto">
                                <b>Leave Date<br></br>
                                    14 Feb 2018
                                </b>
                            </div>
                            <div className="col-md-10">
                                <p className="font-weight-bold text-left">Sick Leave</p>
                                <p className="description pl-2 text-justify">

                                    Line 116:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use
                                  the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop  jsx-a11y/img-redundant-alt
                                  
                                  ./src/Components/ChangePassword/ChangePasswordComponent.js
                                    Line 3:  'Link' is defined but never used  no-unused-vars
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 mx-auto">
                    <div className="card m-2">
                        <div className="card-body">
                            <div className="row">
                            <div className="col-md-2 my-auto">
                                <b>Leave Date<br></br>16 Nov 2018</b>
                            </div>
                            <div className="col-md-10">
                                <p className="font-weight-bold text-left">Sick Leave</p>
                                <p className="description pl-2 text-justify">

                                    Line 116:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use
                                  the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop  jsx-a11y/img-redundant-alt
                                  
                                  ./src/Components/ChangePassword/ChangePasswordComponent.js
                                    Line 3:  'Link' is defined but never used  no-unused-vars
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 mx-auto">
                    <div className="card m-2">
                        <div className="card-body">
                            <div className="row">
                            <div className="col-md-2 my-auto">
                                <b>Leave Date<br></br>03 July 2018</b>
                            </div>
                            <div className="col-md-10">
                                <p className="font-weight-bold text-left">Brothers Weeding</p>
                                <p className="description pl-2 text-justify">

                                    Line 116:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use
                                  the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop  jsx-a11y/img-redundant-alt
                                  
                                  ./src/Components/ChangePassword/ChangePasswordComponent.js
                                    Line 3:  'Link' is defined but never used  no-unused-vars
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeavesComponent;