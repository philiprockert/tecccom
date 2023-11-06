import React from "react";
import { BrowserRouter, Link  } from "react-router-dom";



function Login  () {
    const [user, setUser] = React.useState('')
    const [pass, setPass] = React.useState('')
  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">OMNICOM</h1>
        <p className="login-title">Iniciar Sesión</p>
        <form className="login-form">
          <input onChange={(e)=>setUser(e.target.value)}
            type="text"
            placeholder="Usuario"
            className="login-input"
          />
          <input onChange={(e)=>setPass(e.target.value)}
            type="password"
            placeholder="Contraseña"
            className="login-input"
          />
          <button className="login-button"><Link to="/">Ingresar</Link></button>
        </form>
      </div>
    </div>
  );
};


export { Login }