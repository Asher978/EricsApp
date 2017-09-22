import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import moment from 'moment';



class AdminBookings extends Component {
    constructor (props) {
        super(props);
        this.state = {
            appointments: this.props.appointments,
            appointmentsLoaded: this.props.appointmentsLoaded,
        }

    }
    


    renderClientsBookings = () => {
        if (this.props.appointmentsLoaded) {
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
                        <td>{book.date}</td>
                        <td>{`${moment(book.time, 'HH:mm').format('hh:mm a')}`}</td>
                    </tr>
                )
            })
        }
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log('props recevied', nextProps)
    //     this.setState({
    //         appointments: nextProps.appointments,
    //         appointmentsLoaded: nextProps.appointmentsLoaded,
    //     })
    // }

    // componentDidMount() {
    //     console.log('from adminBookings')
    //     this.props.getAppointments()
    // }

    // componentWillMount () {
    //     const savedBokoking = this.state.appointments;
    //     // DataSnapshot
    //     this.rootRef.on('child_added', snap => {
    //       savedZ.push({
    //         id: snap.key,
    //         zipContent: snap.val().zipContent,
    //         weatherContent: snap.val().weatherContent,
    //         dateContent: snap.val().dateContent,
    //       })
    //       this.setState({
    //         fbZip: savedZ,
    //       })
    //     })
    // }


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








