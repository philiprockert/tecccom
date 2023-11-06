import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css'

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const location = useLocation();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);}
    const isLoginRoute = location.pathname === '/login';
  return (
    
      <aside  className={`sidebar ${isSidebarOpen && !isLoginRoute ? '' : 'hidden'}`}>
      
      <button className="toggle-button" onClick={toggleSidebar}>
        ☰
      </button>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/report">Reporte</Link>
        </li>
        <li>
          <Link to="/sends">Envíos</Link>
        </li>
        <li>
          <Link to="/config">Configuración</Link>
        </li>
        <li>
          <Link to="/create">Cuentas</Link>
        </li>
        <li>
          <Link to="/login">Cerrar sesion</Link>
        </li>
        
        
      </ul>
    </aside>
  );
}

export {Sidebar};
