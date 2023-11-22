import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from "./Components/Landing/LandingPage";
import LoginSignup from './Components/LoginSignup/LoginSignup';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginSignup />
          </Route>
        </Switch>
      </div>    
    </Router>
  );
}

export default App
