import React, { useContext, useState } from "react";
import { UserContext } from "../../../App";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import BookAppointment from "../BookAppointment/BookAppointment";

const Appointment = () => {
  const [loggedInUser, setLoggedInUser]= useContext(UserContext);
  
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <Navbar></Navbar>
      <AppointmentHeader
        handleDateChange={handleDateChange}
      ></AppointmentHeader>
      <BookAppointment date={selectedDate}></BookAppointment>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
