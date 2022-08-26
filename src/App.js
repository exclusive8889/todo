import './App.css';
import React from 'react'
import Login from './component/Auth/Auth';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Preferences from './component/Preferences/Preferences';

function App() {
  return (
    <div className="wrapper">
      {/* <h1>Application</h1> */}
      <Routes>
          <Route path='/' element={<Login/>}/>
      </Routes>
      <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      <Routes>
          <Route path='/pre' element={<Preferences/>}/>
      </Routes>
    </div>
  );
}

export default App;
