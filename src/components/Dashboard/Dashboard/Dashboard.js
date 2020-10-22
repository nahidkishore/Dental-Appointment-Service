import React, { useContext, useEffect, useState } from "react";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import Sidebar from "../Sidebar/Sidebar";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { UserContext } from "../../../App";

const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};
const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  useEffect(() => {
    fetch("https://afternoon-shelf-60296.herokuapp.com/appointmentsByDate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date: selectedDate, email:loggedInUser.email}),
    })
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
      });
  }, [selectedDate]);

  return (
    <section>
      <div style={containerStyle} className="container-fluid row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-5">
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div className="col-md-5">
          <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
