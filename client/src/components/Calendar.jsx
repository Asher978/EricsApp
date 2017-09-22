import React, { Component } from 'react';
import axios from 'axios';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { Jumbotron } from 'react-bootstrap';
import { Alert } from 'reactstrap';

require('react-big-calendar/lib/css/react-big-calendar.css');


BigCalendar.setLocalizer( BigCalendar.momentLocalizer(moment) );


class Calendar extends Component {
  constructor () {
    super();
    this.state = {
      appoint: '',
      appointmentsLoaded: false,
      visible: false,
      event: null,
      title: null,

    }
  }
  componentDidMount() {
    axios('/appointments', {
      method: 'GET',
    }).then(res => {
      let e = res.data.event.map(eve => {
        return {
          title: eve.username,
          start: new Date(eve.date),
          end: moment(eve.date).add('minutes', 20),
        }  
      });
      this.setState({
        event: e,    
        title: e.title,  
        appointmentsLoaded: true,
      })
    }).catch(err => {
      console.log(err);
    })
  }

  renderCalendar () {
    return (this.state.appointmentsLoaded) ? 
      <BigCalendar
        style={{height: '420px'}}
        events={this.state.event}
        onSelectEvent={(eve) => this.renderEventPopUp(eve)}
        /> : (
        <div>Loading....</div>
      )
  }

  renderEventPopUp = (event) => {
    this.setState({ visible: true, appoint: event.title })  
  }

  onDismiss = () => {
    this.setState({ visible: false });
  }

  render(){
    return (
      <div className="container">
        <Jumbotron>
          <h1>Current Bookings</h1>
          <p>Below are my current bookings. Please schedule your consultations with me accordingly!</p>
        </Jumbotron>
        {this.renderCalendar()}
        <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
          {this.state.appoint}
        </Alert>
        <footer>
          <p className="pull-right"></p>
        <p>&copy; Wiley Media & Inc. &middot; <a href="">Privacy</a></p>
        </footer>
      </div>
    )
  }
}


export default Calendar;