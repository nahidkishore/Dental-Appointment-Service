import React from 'react';
import AppointmentList from '../AppointmentList/AppointmentList';

const AppointmentsByDate = ({appointments}) => {
  console.log(appointments)
  return (
    <div>
      <h2>Appointments: {appointments.length}</h2>
   {
     appointments.length? 
     <AppointmentList appointments={appointments}></AppointmentList>
     :
     <div className="p-5">
       <h2 className="text-center">No Appointments</h2>
     </div>
   }
    </div>
  );
};

export default AppointmentsByDate;