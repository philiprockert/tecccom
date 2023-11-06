import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Login } from './login';
import { Dashboard } from './dashboard';
import {Report} from './Report.jsx';
import { CreateCount } from './CreateCount';
import Sends from './sends';
import {Configuracion} from './config';
import { Sidebar } from './Sidebar';
import { ParseExcel } from './ParseExcel';
import ChatPopup from './ChatPopup.jsx';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>

    <div className="app">
      
      <ChatPopup/>
      <div className='content'>
        
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/report" element={<Report />} />
          <Route path="/sends" element={<Sends />} />
          <Route path="/config" element={<Configuracion />} />
          <Route path="/create" element={<CreateCount />} />
          <Route path="/leerexcel" element={<ParseExcel />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
