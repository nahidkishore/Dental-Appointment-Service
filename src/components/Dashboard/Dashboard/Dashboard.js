import React, { useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

const containerStyle = {
  backgroundColor: "#F4FDFB",
  height:"100%"
}
const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <section>
      <div style={containerStyle} className="container-fluid row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-5">
        <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
        </div>
        <div className="col-md-5">
          <AppointmentsByDate></AppointmentsByDate>
        </div>
      </div>
      
    </section>
  );
};

export default Dashboard;