import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Login } from './login';

import { Dashboard } from './dashboard';
import Report from './report';
import Sends from './sends';
import Config from './config';
import { Sidebar } from './Sidebar';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>

    <div className="app">
      <Sidebar /> {/* Agrega el Sidebar a tu App */}
      <div className='content'>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/report" element={<Report />} />
          <Route path="/sends" element={<Sends />} />
          <Route path="/config" element={<Config />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
