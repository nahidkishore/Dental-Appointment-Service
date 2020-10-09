import React from "react";
import doctorImg from "../../../images/appointment.png";
import DoctorCard from "./DoctorCard";
const doctorData = [
  {
    name: "Dr. Caudi",
    phone: "+8801888828543",
    img: doctorImg,
  },
  {
    name: "Dr. Boudi",
    phone: "+8801888828543",
    img: doctorImg,
  },
  {
    name: "Dr. Gadu",
    phone: "+8801888828543",
    img: doctorImg,
  },
];
const Doctors = () => {

  return (
<section className="doctor mt-5">
  <div className="container text-center">
    <h3 className="text-info">Our Doctors</h3>


    <div className="row">
      {
        doctorData.map(doctor =><DoctorCard doctor={doctor}></DoctorCard>)
      }
    </div>
  </div>
</section>
  )
};

export default Doctors;
