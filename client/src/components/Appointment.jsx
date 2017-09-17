import React from 'react';
import { Redirect } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import { Alert } from 'reactstrap';

const Appointment = (props) => {

    return (
        <div className="container">
            <Jumbotron>
                <h1>Appointment Scheduling</h1>
                <p>Please enter below the best date & time that you are available to speak with me!</p>
            </Jumbotron>
            <form className='add' onSubmit={props.handleAppointmentSubmit}>
                <div className='form-group'>
                    <span className='input-group'>
                        <span className='input-group-addon'>Date</span>
                        <input 
                        className='form-control' 
                        type="date"
                        name="appointmentDate"
                        value={props.appointmentDate}
                        onChange={props.handleInputChange}
                        required />
                    </span>
                </div>
                <div className='form-group'>
                    <span className='input-group'>
                        <span className='input-group-addon'>Time</span>
                        <input 
                        className='form-control' 
                        type="time"
                        name="appointmentTime"
                        value={props.appointmentTime}
                        onChange={props.handleInputChange}
                        required />
                    </span>
                </div>
                <div className='form-group'>
                    <span className='input-group'>
                        <span className='input-group-addon'>Description</span>
                        <input 
                        className='form-control' 
                        type="text"
                        name="appointmentDesc"
                        value={props.appointmentDesc}
                        onChange={props.handleInputChange}
                        required />
                    </span>
                </div>
                <input type='submit' value='Book' className='btn bookingbtn' />
            </form>
            <Alert isOpen={props.visible} toggle={props.onDismiss}>{props.message}</Alert>
            {(props.shouldFiredRedirect) ? <Redirect to="/dash" /> : ''}
        </div>
    )
}

export default Appointment;