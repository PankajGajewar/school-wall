import React, { Component } from 'react';
// import { Link } from 'react-router';

class Header extends Component {

  render() {
    return (
      <div className="col-md-12">
        {/* <h1 className="app-logo">
          <img src={appLogo} alt="Techprimelab Logo" />
        </h1> */}
        <div className="col-md-12">
          {/* <Link activeClassName='btn btn-dark' to="/home" className="btn btn-light"> Home </Link>
          <Link activeClassName='btn btn-dark' to="/about" className="btn btn-light"> About </Link>
          <Link activeClassName='btn btn-dark' to="/contact" className="btn btn-light"> Contact </Link>
          <Link activeClassName='btn btn-dark' to="/employee" className="btn btn-light"> Employees </Link>
          <Link activeClassName='btn btn-dark' to="/register" className="btn btn-light"> Register </Link> */}
          <a className='btn btn-dark' href="/home" className="btn btn-light"> Home </a>
          <a className='btn btn-dark' href="/about" className="btn btn-light"> Time Table </a>
          <a className='btn btn-dark' href="/contact" className="btn btn-light"> Exam/Result </a>
          <a className='btn btn-dark' href="/employee" className="btn btn-light"> Leaves </a>
          <a className='btn btn-dark' href="/register" className="btn btn-light"> Contact Us </a>
          <a className='btn btn-dark' href="/register" className="btn btn-light"> Profile </a>
          <a className='btn btn-dark' href="/register" className="btn btn-light"> Change Password</a>
          <a className='btn btn-dark' href="/register" className="btn btn-light"> Logout </a>

        </div>

        {/* <ul>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                Dropdown link
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Link 1</a>
                <a className="dropdown-item" href="#">Link 2</a>
                <a className="dropdown-item" href="#">Link 3</a>
              </div>
            </li>
          </ul> */}
      </div>
    );
  }

}
export default Header;