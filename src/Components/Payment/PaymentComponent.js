import axios from 'axios';
import Constants from '../../ServerConstants';
import HttpService from '../../Services/HTTPService';
import React, { Component } from 'react';

class PaymentComponent extends Component {

    fetchGroupDetails() {

        const body = {
            "direction": "next",
            "page_size": "10",
            "post_id": "1",
            "role": "parent",
            "school_id": "1",
            "timestamp": "1545887413",
            "user_id": "GR343343"
        }
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('idToken');
        const url = Constants.fetchPosts;
        HttpService.postRequest(url, body)
            // .then(response => {
            .then(response => {
                console.log(response);
                // console.log('response:-> ',response);
                if (response.status !== 200) {
                    // this.errorGetAdmin(response);
                    console.log('errorGetAdmin', response);
                } else {
                    // this.successGetAdmin(response);
                    console.log('successGetAdmin', response);
                }
                console.log(response);
            })
            .catch(function (error) {
                // this.stopLoader();
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.fetchGroupDetails} className="btn btn-danger">Click Here..!</button>
            </div >
        );
    }
};
export default PaymentComponent;