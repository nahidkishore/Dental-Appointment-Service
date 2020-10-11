import React, { useState } from 'react';
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Navbar from '../../Shared/Navbar/Navbar';

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    
    <div>
      <Navbar></Navbar>
      
      <div className=" align-items-center  col-md-5 shadow">
      <Calendar onChange={handleDateChange} value={new Date()} />
      </div>
      
    </div>
  );
};

export default Calender;