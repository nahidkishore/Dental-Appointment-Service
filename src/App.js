import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appointment from "./components/Appointment/Appointment/Appointment";
import AddDoctor from "./components/Dashboard/AddDoctor/AddDoctor";
import AllPatients from "./components/Dashboard/AllPatients/AllPatients";
import Calender from "./components/Dashboard/Calender/Calender";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>

          <PrivateRoute path="/dashboard/appointment">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard/AllPatients">
            <AllPatients></AllPatients>
          </PrivateRoute>
          <Route path="/dashboard/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
          <Route exact path="/dashboard/calender">
            <Calender></Calender>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
