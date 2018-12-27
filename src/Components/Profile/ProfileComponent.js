import React, { Component } from 'react';
import axios from 'axios';
import Constants from '../../ServerConstants';
import HttpService from '../../Services/HTTPService';
import { browserHistory } from 'react-router';

class ProfileComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userDetails: []
        }
        this.onLoadHandler = this.onLoadHandler.bind(this);
        this.onLoadHandler();
    }

    componentDidMount() {
        window.addEventListener('load', this.onLoadHandler);
    }

    onLoadHandler() {

        const body = {
            "school_id": "1",
            "user_id": "123456789_Shrutika"
        }

        axios.defaults.headers.common['Authorization'] = localStorage.getItem('idToken');
        const url = Constants.fetchUserDetails;
        HttpService.postRequest(url, body)
            .then(response => {
                if (response.status !== 200) {
                    alert('Error: ' + response);
                } else {
                    this.setState(
                        {
                            userDetails: response.data.user
                        }
                    )
                }
                // console.log("STATE: ", this.state);
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    saveChanges = () => {
        console.log("fname: ", this.state.fname);
        console.log("lname: ", this.state.lname);
        console.log("dob: ", this.state.dob);
        alert("Changes Saved");
        // browserHistory.push('/dashboard');
    }

    // fnameHandler = (event) => {
    //     this.setState(
    //         { fname: event.target.value }
    //     );
    // }

    // lnameHandler = (event) => {
    //     this.setState(
    //         { lname: event.target.value }
    //     );
    // }

    // dobHandler = (event) => {
    //     this.setState(
    //         { dob: event.target.value }
    //     );
    // }

    render() {
        return (
            <form>
                {
                    this.state.userDetails.map((user) =>
                        <div className="row">
                            <div className="col-md-6 p-5">
                                <div className="row text-left">
                                    <div className="col-md-8 mx-auto">
                                        <h2 className="text-center">Personal Details</h2>
                                        <hr></hr>


                                        <div className="form-group">
                                            <label>First Name</label><span className="text-danger">*</span>
                                            <input className="form-control" type="text" required
                                                value={user.firstName}></input>
                                        </div>
                                        <div className="form-group">
                                            <label>Last Name</label><span className="text-danger">*</span>
                                            <input className="form-control" type="text" required
                                                value={user.lastName}></input>
                                        </div>
                                        <div className="form-group">
                                            <label>Blood Group</label>
                                            <input className="form-control" type="text" required
                                                value={user.bloodGroup}></input>
                                        </div>

                                        <div className="form-group">
                                            <label>User ID</label><span className="text-danger">*</span>
                                            <input className="form-control" type="tel" required
                                                value={user.user_id} readOnly></input>
                                        </div>

                                        <div className="form-group">
                                            <label>Email</label>
                                            <input className="form-control" type="email" required
                                                value={user.user_email}></input>
                                        </div>


                                        <div className="form-group">
                                            <label>Father Name</label><span className="text-danger">*</span>
                                            <input className="form-control" type="text" required
                                                value={user.fatherName}></input>
                                        </div>


                                        <div className="form-group">
                                            <label>Father Mobile Number</label><span className="text-danger">*</span>
                                            <input className="form-control" type="text" required
                                                value={user.fatherMobileNumber}></input>
                                        </div>
                                        <div className="form-group">
                                            <label>Mother Name</label><span className="text-danger">*</span>
                                            <input className="form-control" type="text" required
                                                value={user.motherName}></input>
                                        </div>
                                        <div className="form-group">
                                            <label>Mother Mobile Number</label><span className="text-danger">*</span>
                                            <input className="form-control" type="tel" required
                                                value={user.motherMobileNo}></input>
                                        </div>
                                        <div className="form-group">
                                            <label>Address</label><span className="text-danger">*</span>
                                            <textarea className="form-control" value={user.address}></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label>House Address</label><span className="text-danger">*</span>
                                            <textarea className="form-control" value={user.house}></textarea>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            {/* 2nd Column */}
                            <div className="col-md-6 p-5">
                                <div className="row text-left">
                                    <div className="col-md-8 mx-auto">
                                        {/* 2-1 */}
                                        <div className="row">
                                            <div className="col-md">
                                                <h2 className="text-center">School Details</h2>
                                                <hr></hr>
                                                    <label>School ID: {user.school_id}</label><br></br>
                                                    <label>School Name: {user.schoolName}</label><br></br>
                                                    <label>Student ID: {user.student_id}</label><br></br>
                                                    <label>Roll No.: {user.roll_no}</label><br></br>
                                                    <label>Class: {user.class_name}</label><br></br>
                                                    <label>School Start Date: {user.school_start_date}</label><br></br>
                                                    <label>School End Date: {user.school_end_date}</label>
                                            </div>
                                        </div>
                                        {/* 2-2 */}
                                        {/* <br></br> */}
                                        <div className="row">
                                            <div className="col-md">
                                                <h2 className="text-center">Bus Pickup Details</h2>
                                                <hr></hr>

                                                <div>
                                                    <label>Pickup Bus No.: {user.busNoForPickup}</label><br></br>
                                                    <label>Bus Pickup Location: {user.busPickupLocation}</label><br></br>
                                                    <label>Bus Pickup Time: {user.busPickupTime}</label><br></br>
                                                    <label>Bus Pickup Route: {user.pickupBusRoute}</label><br></br>
                                                    <label>Drop Bus No.: {user.busNoForDrop}</label><br></br>
                                                    <label>Bus Drop Location: {user.busDropLocation}</label><br></br>
                                                    <label>Bus Drop Time: {user.busDropTime}</label><br></br>
                                                    <label>Bus Drop Route: {user.dropBusRoute}</label><br></br>
                                                    <label>Emergency Contact: {user.emergencyContact}</label><br></br>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}
                <div className="row">
                    <div className="col-md-2 mx-auto">
                        <button type="submit" onClick={this.saveChanges} className="btn btn-success" > Save Changes</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default ProfileComponent;