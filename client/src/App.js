import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';

import Nav from './components/Nav';
import Home from './components/Home';
import Auth from './modules/Auth';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dash from './components/Dash';
import Bio from './components/Bio';



class App extends Component {
  constructor () {
    super();
    this.state = {
      auth: Auth.isUserAuthenticated(),
      shouldFireRedirect: false,
      loginUserName: '',
      loginPassword: '',
      registerUserName: '',
      registerPassword: '',
      registerEmail: '',
      registerFirstName: '',
      registerLastName: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);

    this.resetFireRedirect = this.resetFireRedirect.bind(this);

  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    axios.post('/login', {
      username: this.state.loginUserName,
      password: this.state.loginPassword,
    }).then(res => {
      console.log(res);
      if (res.data.token) {
        Auth.authenticateToken(res.data.token);
        this.setState({
          auth: Auth.isUserAuthenticated(),
          loginUserName: '',
          loginUserPassword: '',
        })
      }
    }).catch(err => {
      console.log(err);
    })
  }

  handleRegisterSubmit(e) {
    e.preventDefault();
    axios.post('/users', {
      user: {
        username: this.state.registerUserName,
        password: this.state.registerPassword,
        email: this.state.registerEmail,
        firstName: this.state.registerFirstName,
        lastName: this.state.registerLastName,        
      }
    }).then(res => {
      if (res.data.token) {
        Auth.authenticateToken(res.data.token);
        this.setState({
          auth: Auth.isUserAuthenticated(),
        })
      }
    }).catch(err => {
      console.log(err);
    })
  }

  resetFireRedirect() {
    if (this.state.shouldFireRedirect) {
      this.setState({
        shouldFireRedirect: false,
      })
    }
  }

  logoutUser() {
    axios.delete('/logout', {
      headers: {
        'Authorization': `Token ${Auth.getToken()}`,
        token: Auth.getToken(),
      }
    }).then(res => {
      Auth.deauthenticateUser();
      this.setState({
        auth: Auth.isUserAuthenticated(),
        loginUserName: '',
        loginUserPassword: '',
      })
    })
  }


  render() {
    return (
      <Router>
      <div className="app">
        <Nav logoutUser={this.logoutUser} />
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/login"
          render={() =>
            !this.state.auth ? (
              <LoginForm
                auth={this.state.auth}
                loginUserName={this.state.loginUsername}
                loginPassword={this.state.loginPassword}
                handleInputChange={this.handleInputChange}
                handleLoginSubmit={this.handleLoginSubmit}
              />
            ) : (
              <Redirect to="/dash" />
            )}
        />
        <Route
          exact
          path="/register"
          render={() =>
            !this.state.auth ? (
              <RegisterForm
                auth={this.state.auth}
                registerUserName={this.state.registerUsername}
                registerPassword={this.state.registerPassword}
                registerEmail={this.state.registerEmail}
                registerFirstName={this.state.registerFirstName}
                registerLastName={this.state.registerLastName}
                handleInputChange={this.handleInputChange}
                handleRegisterSubmit={this.handleRegisterSubmit}
              />
            ) : (
              <Redirect to="/dash" />
            )}
        />
        <Route
            exact
            path="/dash"
            render={() =>
              this.state.auth ? <Dash auth={this.state.auth} resetFireRedirect={this.resetFireRedirect} /> : <Redirect to="/login" />}
          />
        <Route exact path="/bio" component={Bio} />
      </div>
    </Router>
    );
  }
}

export default App;
