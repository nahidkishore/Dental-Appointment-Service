import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../images/fluride.png"
const Navbar = () => {
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
const history = useHistory();

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="">
  <img onClick={()=> history.push('/')} src={logo} alt="" className="img-fluid ml-5 py-2" width="50px"/> <p>{loggedInUser.name}</p>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02" >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
          <NavLink to="/home" className="nav-link mr-5" style={{textDecoration:'none'}}>Home</NavLink>
          </li>
        
          <li className="nav-item">
          <NavLink to="/appointment" className="nav-link mr-5" style={{textDecoration:'none',color:'white'}}>Appointment</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/appointment" className="nav-link mr-5" style={{textDecoration:'none',color:'white'}}>Reviews</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/appointment" className="nav-link mr-5" style={{textDecoration:'none',color:'white'}}>Blogs</NavLink>
          </li>
        
          <li className="nav-item">
          <NavLink to="/appointment" className="nav-link mr-5" style={{textDecoration:'none',color:'white'}}>Contact Us</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/appointment" className="nav-link mr-5 " style={{textDecoration:'none',color:'white'}}>About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
