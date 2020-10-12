import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faGripHorizontal,
  faUsers,
  faUserPlus,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import "./Sidebar.css";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isDoctor, setIsDoctor] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/isDoctor", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsDoctor(data));
  }, []);
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/dashboard/appointment" className="text-white">
            <FontAwesomeIcon icon={faGripHorizontal}></FontAwesomeIcon>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        {isDoctor && 
          <div>
            <li>
              <Link to="/dashboard/calender" className="text-white">
                <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                <span>Calendar</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/AllPatients" className="text-white">
                <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                <span>Patients</span>
              </Link>
            </li>
            <li>
              <Link to="/doctors/description" className="text-white">
                <FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon>
                <span>Description</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/addDoctor" className="text-white">
                <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
                <span>Add Doctor</span>
              </Link>
            </li>
            <li>
              <Link to="/doctors/settings" className="text-white">
                <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
                <span>Settings</span>
              </Link>
            </li>
          </div>
        }
      </ul>
      <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
    </div>
  );
};

export default Sidebar;
