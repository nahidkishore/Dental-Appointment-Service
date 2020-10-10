import React, { useState } from 'react';
import '../../../App.css'
import AppointmentForm from '../AppointmentForm/AppointmentForm';
const BookingAppointmentCard = ({booking}) => {
   const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }
  return (
    <div className="col-md-4 mb-5">
    <div className="card shadow-sm p-3">
        <div className="card-body text-center">
            <h5 className="card-title text-brand">{booking.subject}</h5>
            <h6>{booking.visitingHour}</h6>
            <p>{booking.totalSpace} SPACES AVAILABLE</p>
            <button onClick={openModal} className="btn btn-brand text-uppercase">Book Appointment</button>
           <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={booking.subject}></AppointmentForm>
        </div>
    </div>
</div>
  );
};

export default BookingAppointmentCard;