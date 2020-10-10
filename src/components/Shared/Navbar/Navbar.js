import React, { useContext } from "react";
import { UserContext } from "../../../App";
import logo from "../../../images/fluride.png"
const Navbar = () => {
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
  <img src={logo} alt="" className="img-fluid ml-5 py-2" width="50px"/> <p>{loggedInUser.name}</p>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
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
