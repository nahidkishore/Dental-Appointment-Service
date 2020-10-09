import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom"
import Home from './components/Home/Home/Home';

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
