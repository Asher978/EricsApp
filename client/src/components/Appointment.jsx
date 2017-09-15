import React from 'react';
import { Redirect } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

const Appointment = (props) => {

    return (
        <div className="container">
            <Jumbotron>
                <h1>Appointment Scheduling</h1>
                <p>Add a new appointment by filling in the required info below!</p>
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
                <input type='submit' value='Book' className='btn' />
            </form>
            {(props.shouldFiredRedirect) ? <Redirect to="/dash" /> : ''}
        </div>
    )
}

export default Appointment;