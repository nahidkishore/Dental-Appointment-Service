import React from "react";
import logo from "../../../images/001-dental.png"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
     <img src={logo} alt="" className="img-fluid"/>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link mr-5" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-5" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-5" href="#">
              Dental Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-5 text-white">
              Reviews
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-5 text-white" href="#">
              Blog
            </a>
          </li>
        
          <li className="nav-item">
            <a className="nav-link mr-5 text-white" href="#">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
