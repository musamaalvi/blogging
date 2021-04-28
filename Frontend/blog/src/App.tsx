import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useAppState from './appState';


function App() {
  const {Counter, setCounter} = useAppState();
  const handleClick = () => {
    setCounter(Counter+1);
  }
  return (
    <div className="App">
      <h1>{Counter}</h1>
     <button onClick={handleClick}>
       increment counter
     </button>
    </div>
  );
}

export default App;
