import React from 'react';
import './App.css';
import Router from "./Router";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1><Link to="/cars">Cars</Link></h1>    
      <h1><Link to="/add">Add</Link></h1>      
      <Router />
    </div>
  );
}

export default App;
