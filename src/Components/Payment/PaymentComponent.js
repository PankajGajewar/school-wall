import axios from 'axios';
import Constants from '../../ServerConstants';
import HttpService from '../../Services/HTTPService';
import React, { Component } from 'react';

class PaymentComponent extends Component {

    fetchGroupDetails () {

        console.log('clicked..');
        // console.log(localStorage.getItem('idToken'));
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('idToken');
        const url = Constants.fetchGroupDetails;
        HttpService.postRequest(url)
            .then(response => {
                console.log('response:-> ',JSON.stringify(response));
                if (response.status !== 200) {
                    // this.errorGetAdmin(response);
                    console.log("ErrorGetAdmin: "+response);
                } else {
                    // this.successGetAdmin(response);
                    console.log("SuccessGetAdmin: "+response);
                }
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
            </div>
        );
    }
};
export default PaymentComponent;