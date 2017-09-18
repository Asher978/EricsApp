import React from 'react';

import { Link } from 'react-router-dom';
import Auth from '../modules/Auth';

const Nav = (props) => {
  return (
      <div className="navbar-wrapper">
      <div className="container">

        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="">Project name</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/">Home</Link>            
                </li>
                <li>
                  <Link to="/bio">Bio</Link>
                </li>
                <li>
                  <Link to="/calendar">Calendar</Link>
                </li>
                {!Auth.isUserAuthenticated() ? (
          <ul className="nav navbar-nav">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        ) : (
          <ul className="nav navbar-nav">
            <li>
              <Link to="/newappointment">Bookings</Link>
            </li>
            <li>
              <a className="logout" onClick={props.logoutUser}>Log Out</a>
            </li>
          </ul>
        )}
                
        {(props.admin === 'true') ?  (
            <ul className="nav navbar-nav">
              <li>
                <Link to="/dash">Dasboard</Link>
              </li>
            </ul>
        ) : ( false )}
                
              </ul>
            </div>
          </div>
        </nav>

      </div>
    </div>

  );
};

export default Nav;