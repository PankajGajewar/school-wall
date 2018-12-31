import React, { Component } from 'react';
import logo from '../../src/VKP_School.jpg';
import { Link } from 'react-router';
// import axios from 'axios';
// import Constants from '../ServerConstants';
// import HttpService from '../Services/HTTPService';
import './Header.css';

class Header extends Component {

  // constructor(props) {
  //   super(props);
  // this.state = {
  //   username: ''
  // }
  // this.onLoadHandler = this.onLoadHandler.bind(this);
  // }

  // componentDidMount() {
  // window.addEventListener('load', this.onLoadHandler);
  // }

  render() {
    return (
      <div className="row pt-4">
        <div className="col-md-2">
          <img className="img-fluid" src={logo} width="130px" height="115px" alt="Unable to load image" />
        </div>
        <div className="text-left col-md-10">
          <div className="row">
            <p className="heading">Vikhe Patil Memorial School</p>
          </div>
          <div className="row pt-0 mt-0">
            Making Life Meaningful
          </div>          
          <div className="row pt-3">
            <Link activeClassName='btn btn-dark' to="/dashboard" className="m-1 btn btn-light"> Home </Link>
            <Link activeClassName='btn btn-dark' to="/time-table" className="m-1 btn btn-light"> Time Table </Link>
            <Link activeClassName='btn btn-dark' to="/exam-result" className="m-1 btn btn-light"> Exam/Result </Link>
            <Link activeClassName='btn btn-dark' to="/leaves" className="m-1 btn btn-light"> Leaves </Link>
            <Link activeClassName='btn btn-dark' to="/payment" className="m-1 btn btn-light"> Payment </Link>
            <Link activeClassName='btn btn-dark' to="/contact-us" className="m-1 btn btn-light"> Contact Us </Link>
            {/* <Link activeClassName='btn btn-dark' to="/contact-us" className="m-1 btn btn-light"> Contact Us </Link> */}
            <label className="dropdown">
              <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                username
            </button>
              <div className="dropdown-menu" >
                <Link activeClassName='btn btn-white' to="/profile" className="m-1 btn btn-white text-dark"> Profile </Link>
                <Link activeClassName='btn btn-white' to="/change-password" className="m-1 btn btn-white text-dark"> Change Password </Link>
                <Link activeClassName='btn btn-white' to="/login" className="m-1 btn btn-white text-dark"> Logout </Link>
              </div>
            </label>
          </div>
        </div>
      </div>
    );
  }

}
export default Header;
