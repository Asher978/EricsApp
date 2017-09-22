class Booking {

    static saveBookings (length) {
        localStorage.setItem('Length', length);
    }

    static getBookings () {
        return localStorage.getItem('Length')
    }

}

export default Booking;