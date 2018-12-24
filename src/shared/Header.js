import React, { Component } from 'react';
import logo from '../../src/VKP_School.jpg';
import { Link } from 'react-router';

class Header extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          <img src={logo} width="130px" height="115px" alt="Unable to load image" />
        </div>
        <div className="col-md-10 pt-4">
          <Link activeClassName='btn btn-dark' to="/dashboard" className="m-1 btn btn-light"> Dashboard </Link>
          <Link activeClassName='btn btn-dark' to="/time-table" className="m-1 btn btn-light"> Time Table </Link>
          <Link activeClassName='btn btn-dark' to="/login" className="m-1 btn btn-light"> Logout </Link>
        </div>
      </div>
    );
  }

}
export default Header;
