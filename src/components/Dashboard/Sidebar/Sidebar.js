import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faGripHorizontal,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import "./Sidebar.css";

const Sidebar = () => {
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
          <Link to="/doctors/settings" className="text-white">
            <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
