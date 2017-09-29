import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import moment from 'moment';



class AdminBookings extends Component {

    renderClientsBookings () {
        return this.props.appointments.map(book => {
            return (
                <tr key={book.id} id={book.key}>
                    <td>{book.user}&nbsp;<button type="button"
                                                        className="btn btn-danger btn-xs" 
                                                        aria-label="Left Align"
                                                        onClick={() => this.props.handleDeleteBooking(book.id, book.key)}>
                                                        <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                                                        </button>
                                                        </td>
                    <td>{`${moment(book.date).format('MMM D, Y')}`}</td>
                    <td>{`${moment.utc(book.time).format('hh:mm a')}`}</td>
                </tr>
            )
        })
    }

    render () {
        return (
            <div className="container">
                <Jumbotron>
                    <h1>My Current Bookings</h1>
                </Jumbotron>
                <h2 className="sub-header">Phone Consultations</h2>
                <div className="table-responsive">
                    <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderClientsBookings()}
                    </tbody>
                    </table>
                </div>
            </div>
        )
    }


}

export default AdminBookings;








