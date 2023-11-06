import React from "react";
import { useState } from "react";
import XLSX from 'xlsx'
import {Modal} from "./Modal";

function ParseExcel () {
    
    const [filename, setFilename] = useState(null)
    const [sheetname, setSheetname] = useState([])
    const [showModal, setShowModal] = useState(false);
    const handleFile = async (e) => {
        const file = e.target.files[0];
        setFilename(file.name)
        
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const raw_data = XLSX.utils.sheet_to_json(worksheet);
        setSheetname(raw_data)
        setShowModal(true);
        console.log(raw_data);
        
    }
    const closeModal = () => {
        setShowModal(false);
      }
    
    return(
        <>
         <h1>Selecciona un archivo</h1>
      <input type="file" onChange={(e) => handleFile(e)} />
      
      {filename && <span>{filename}</span>}
      {sheetname.length > 0 && (
        <Modal show={showModal} onClose={closeModal} title="Datos del archivo" data={
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Edad</th>
              </tr>
            </thead>
            <tbody>
              {sheetname.map((rowData, index) => (
                <tr key={index}>
                  <td>{rowData.id}</td>
                  <td>{rowData.nombre}</td>
                  <td>{rowData.celular}</td>
                </tr>
              ))}
            </tbody>
          </table>
        } />
      )}
      
        </>

    )
}

export {ParseExcel}