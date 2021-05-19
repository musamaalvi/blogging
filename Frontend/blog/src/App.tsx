import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useAppState from './appState';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './routes/login/login';

function App() {
  // const {Counter, setCounter} = useAppState();
  // const handleClick = () => {
  //   setCounter(Counter+1);
  // }
  // return (
  //   <div className="App">
  //     <h1>{Counter}</h1>
  //    <button onClick={handleClick}>
  //      increment counter
  //    </button>
  //   </div>
  // );
  return(
<Router>
  <h2>thi is home</h2>

<Route path="/testing" component={testing}/>
<Route path="/login" component={Login}/>
  
</Router>

  )



}

const testing = () => {
  return (<h1>
    this is testing
  </h1>)
}

export default App;
