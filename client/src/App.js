import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import axios from 'axios';

import Nav from './components/Nav';
import Home from './components/Home';
import Auth from './modules/Auth';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dash from './components/Dash';
import Bio from './components/Bio';
import Calendar from './components/Calendar';
import Appointment from './components/Appointment';
import AdminBookings from './components/AdminBookings';
import * as firebase from 'firebase';




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
      appointmentTime: '',
      appointmentDate: '',
      appointmentDesc: '',
      admin: Auth.isUserAdmin(),
      visible: false,
      message: null,
      appointments: null, 
      appointmentsLoaded: false,
      bookings: [],
    };
    const config = {
        apiKey: "AIzaSyAil_1uLU4pZylnry_BPbEcHO5i5bJ3tY8",
        authDomain: "ericapp-1a07a.firebaseapp.com",
        databaseURL: "https://ericapp-1a07a.firebaseio.com",
        projectId: "ericapp-1a07a",
        storageBucket: "ericapp-1a07a.appspot.com",
        messagingSenderId: "874674165009"
    };
    
    firebase.initializeApp(config);
    this.rootRef = firebase.database().ref();
    this.bookingsRef = this.rootRef.child('appoint');

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.handleAppointmentSubmit = this.handleAppointmentSubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this)
    this.getAppointments = this.getAppointments.bind(this);

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
        Auth.authenticateToken(res.data.token, res.data.admin);
        this.setState({
          auth: Auth.isUserAuthenticated(),
          loginUserName: '',
          loginUserPassword: '',
          admin: Auth.isUserAdmin(),
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
        firstname: this.state.registerFirstName,
        lastname: this.state.registerLastName,        
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

  handleAppointmentSubmit (e) {
    e.preventDefault();
    axios('/appointments', {
      method: 'POST',
      data: {
        appointment: {
          date: this.state.appointmentDate,
          time: this.state.appointmentTime,
          description: this.state.appointmentDesc,
        }
      },
      headers: {
        'Authorization': `Token ${Auth.getToken()}`,
        token: Auth.getToken(),
      }
    }).then(res => {
      console.log(res)
      this.setState({
        shouldFireRedirect: true,
        appointmentDate: '',
        appointmentTime: '',
        appointmentDesc: '',
        visible: true,
        message: res.data.message,
        appointments: res.data.event,
        appointmentsLoaded: true,
      });
    }).catch(err => {
      console.log(err);
    });
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
        admin: Auth.getAdmin(),
      }
    }).then(res => {
      Auth.deauthenticateUser();
      this.setState({
        auth: Auth.isUserAuthenticated(),
        admin: Auth.isUserAdmin(),
        loginUserName: '',
        loginUserPassword: '',
      })
    })
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  handleDeleteBooking = (id, key) => {
    console.log(id)
    this.bookingsRef.child(key).set(null)
    axios('/appointments', {
      method: 'DELETE',
      params: { appointment_id: id },
      headers: {
        'Authorization': `Token ${Auth.getToken()}`,
        token: Auth.getToken(),
        admin: Auth.getAdmin(),
      },
    }).then(res => {
      this.setState({
        appointments: res.data.event,
        appointmentsLoaded: true,
      })
    }).catch(err => {
      console.log(err);
    })
  }

  getAppointments () {
    axios('/appointments', {
        method: 'GET',
      }).then(res => {
        this.setState({
          appointments: res.data.event,
          appointmentsLoaded: true,
        })
    }).catch(err => {
        console.log(err);
    }) 
  }

  componentDidMount() {
    this.getAppointments();
  }
  
  componentWillMount() {
    this.bookingsRef.on('child_added', snapshot => {
      const myBookings = snapshot.val();
      const updatedBookings = [...this.state.bookings];
      myBookings.key = snapshot.key;
      updatedBookings.push(myBookings)
      this.setState({ bookings: updatedBookings })
    })

    this.bookingsRef.on('child_removed', snapshot => {
      const updatedBookings = [...this.state.bookings];
      for(let i=0; i < updatedBookings.length; i++) {
        if(updatedBookings[i].key === snapshot.key) {
          updatedBookings.splice(i, 1)
          this.setState({ bookings: updatedBookings })
        }
      };
    });
  }

  render() {
    return (
      <Router>
      <div className="app">
        <Nav logoutUser={this.logoutUser} admin={this.state.admin} />
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
              <Redirect to="/" />
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
              <Redirect to="/" />
            )}
        />
        <Route
            exact
            path="/dash"
            render={() =>
              this.state.auth ? <Dash auth={this.state.auth} resetFireRedirect={this.resetFireRedirect} /> : <Redirect to="/login" />}
          />
        <Route exact path="/bio" component={Bio} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/newappointment" 
        render={() => 
        this.state.auth ? (
            <Appointment
              appointmentDate={this.state.appointmentDate}
              appointmentTime={this.state.appointmentTime}
              appointmentDesc={this.state.appointmentDesc}
              visible={this.state.visible}
              message={this.state.message}
              onDismiss={this.onDismiss}
              handleInputChange={this.handleInputChange}
              handleAppointmentSubmit={this.handleAppointmentSubmit}
              shouldFireRedirect={this.state.shouldFireRedirect}
            />
          ) : (
            <Redirect to="/login" />
          )}
        />
        <Route 
          exact
          path="/adminbookings"
          render={() =>
            this.state.auth && this.state.admin ? <AdminBookings 
                                                    handleDeleteBooking={this.handleDeleteBooking}
                                                    appointments={this.state.bookings}
                                                    appointmentsLoaded={this.state.appointmentsLoaded}
                                                    firebaseRef={this.bookingsRef}
                                                     /> : <Redirect to="/login" />
          }
        />
      </div>
    </Router>
    );
  }
}

export default App;
