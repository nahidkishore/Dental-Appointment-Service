import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import AllPatientDataTable from "./AllPatientDataTable";

const AllPatients = () => {
  const [appointments, setAppointments] = useState([]);
  useState(() => {
    fetch("https://afternoon-shelf-60296.herokuapp.com/AllPatients")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);
  return (
    <section>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 mt-5">
          <h2 className="text-center text-brand">All Patients</h2>
          <AllPatientDataTable
            appointments={appointments}
          ></AllPatientDataTable>
        </div>
      </div>
    </section>
  );
};

export default AllPatients;
