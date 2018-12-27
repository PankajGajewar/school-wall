import React, { Component } from 'react';
import logo from '../../src/VKP_School.jpg';
import { Link } from 'react-router';
import axios from 'axios';
import Constants from '../ServerConstants';
import HttpService from '../Services/HTTPService';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
    this.onLoadHandler = this.onLoadHandler.bind(this);
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
          alert('Error: ' + JSON.stringify(response));
        } else {
          console.log("responseeeee  ",response);
          this.setState(
            {
              username: response.data.user.user_id
            }
          )
        }
        console.log("STATEEE: ", this.state);
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  render() {
    return (
      <div className="row pt-4">
        <div className="col-md-2">
          <img className="img-fluid" src={logo} width="130px" height="115px" alt="Unable to load image" />
        </div>
        <div className="text-left col-md-10 pt-4">
          <Link activeClassName='btn btn-dark' to="/dashboard" className="m-1 btn btn-light"> Home </Link>
          <Link activeClassName='btn btn-dark' to="/time-table" className="m-1 btn btn-light"> Time Table </Link>
          <Link activeClassName='btn btn-dark' to="/exam-result" className="m-1 btn btn-light"> Exam/Result </Link>
          <Link activeClassName='btn btn-dark' to="/leaves" className="m-1 btn btn-light"> Leaves </Link>
          <Link activeClassName='btn btn-dark' to="/payment" className="m-1 btn btn-light"> Payment </Link>
          <Link activeClassName='btn btn-dark' to="/contact-us" className="m-1 btn btn-light"> Contact Us </Link>
          {/* <Link activeClassName='btn btn-dark' to="/contact-us" className="m-1 btn btn-light"> Contact Us </Link> */}


          <label className="dropdown">
            <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              user
            </button>
            <div className="dropdown-menu" >
              <Link activeClassName='btn btn-white' to="/profile" className="m-1 btn btn-white text-dark"> Profile </Link>
              <Link activeClassName='btn btn-white' to="/change-password" className="m-1 btn btn-white text-dark"> Change Password </Link>
              <Link activeClassName='btn btn-white' to="/login" className="m-1 btn btn-white text-dark"> Logout </Link>
            </div>
          </label>

        </div>
      </div>
    );
  }

}
export default Header;
