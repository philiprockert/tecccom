import React from "react";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

import  axios  from "axios";
import './crear.css'
function CreateCount(){
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      if (name === 'nombre') setNombre(value);
      else if (name === 'email') setEmail(value);
      else if (name === 'password') setPassword(value);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const data = {
        nombre,
        email,
        password
      };
        axios.post('https://serveapp-dev-hqfk.1.ie-1.fl0.io/crear-datos', data)
          .then(response => {
            console.log(response.data);
            // Aquí puedes manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito en la interfaz de usuario.
          })
          .catch(error => {
            console.error(error);
            // Aquí puedes manejar los errores, por ejemplo, mostrar un mensaje de error en la interfaz de usuario.
          });
      }
    
       
        return (
          <div className="create-div">
            <Sidebar/>
            <form onSubmit={handleSubmit}>
              <input type="text" name="nombre" placeholder="Nombre" onChange={handleInputChange} />
              <input type="text" name="email" placeholder="Email" onChange={handleInputChange} />
              <input type="password" name="password" placeholder="Contraseña" onChange={handleInputChange} />
              <button className='enviardatos'type="submit">Crear cuenta</button>
            </form>
          </div>
        );
      }
    
    
    
    


export {CreateCount}