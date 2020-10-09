import React from 'react';
import appointment from '../../../images/appointment.png'
import './MakeAppointment.css';

const MakeAppointment = () => {
  return (
    <section className="make-appointment ">
    <div className="container">
      <div className="row">
        <div className="col-md-5 ">
          <img src={appointment} alt="" className="img-fluid"/>

        </div>
        <div className="col-md-7  py-5">
     <h5 className="txt-primary text-uppercase"> Appointment</h5>
      <p className="my-4"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, autem dolorum. Aliquid commodi et molestias?</p>

      <button className="btn btn-primary">Learn More</button>
     </div>
      </div>
    </div>
      
    </section>
  );
};

export default MakeAppointment;