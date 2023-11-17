import { useState } from 'react'
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Dashboard from './Components/SignUp/SignUp';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {

  return (
    <div>
      <LoginSignup />
    </div>
  )
}

export default App
