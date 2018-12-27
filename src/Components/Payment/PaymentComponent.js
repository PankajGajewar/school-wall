import axios from 'axios';
import Constants from '../../ServerConstants';
import HttpService from '../../Services/HTTPService';
import React, { Component } from 'react';

class PaymentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.fetchGroupDetails = this.fetchGroupDetails.bind(this);
    }

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
            .then(response => {
                if (response.status !== 200) {
                    // this.errorGetEmployeeList(response);

                } else {
                    // this.successGetEmployeeList(response);
                    console.log(response);
                    this.setState({
                        posts: response.data.posts
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            })

            // console.log("STATUS: ",this.state)
    }

    render() {
        return (
            <div>
                <button onClick={this.fetchGroupDetails} className="btn btn-danger">Click Here..!</button>
                {
                    this.state.posts.length > 0 ?
                        <div>Post Id      Date
                            {this.state.posts.map((post) =>
                            <li key={post.postId.toString()}>
                                {post.postId}    {post.date}
                            </li>
                        )}

                        </div>
                        : null
                }
                <div>

                </div>
            </div >
        );
    }
};
export default PaymentComponent;