import React from 'react';

const AppointmentList = ({appointments}) => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th className="text-primary">Name</th>
          <th className="text-primary">Phone</th>
          <th className="text-primary">EMail</th>
        </tr>
     
      </thead>
      <tbody>
      
      {
          appointments.map((appointment,index)=>
          <tr>
            <td>{appointment.name}</td>
            <td>{appointment.phone}</td>
            <td>{appointment.email}</td>
          </tr>
          )
      }
      </tbody>
      
    </table>
  );
};

export default AppointmentList;