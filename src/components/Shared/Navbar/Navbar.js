import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
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
        <ul className="navbar-nav ml-auto" style={{fontSize:' 1.42em'}}>
          <li className="nav-item active">
          <Link className="nav-link mr-5" to="/">Home</Link>
          </li>
          <li className="nav-item">
               <Link className="nav-link mr-5 " to="/login">Login</Link>
           </li>

          <li className="nav-item">
       
          <Link className="nav-link mr-5 text-white" to="/dashboard/AllPatients">Patients</Link>
          </li>
          <li className="nav-item">
  
          <Link className="nav-link mr-5 text-white" to="dashboard/appointment">Dashboard</Link>
          </li>
        
          <li className="nav-item">
          
          <Link className="nav-link mr-5 text-white" to="/appointment">Admin</Link>
          </li>
        
      
            <li className="nav-item">
             <Link className="nav-link mr-5 text-white" to="#">Contact Us</Link>
             </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
