import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Modal } from "./Modal";
import * as XLSX from 'xlsx';

import './Sends.css'; // Importa el archivo de estilos CSS

function Sends() {
  const [communicationType, setCommunicationType] = useState('sms');
  const [isBulk, setIsBulk] = useState(true);
  const [contacts, setContacts] = useState('');
  const [message, setMessage] = useState('');
  const [isScheduled, setIsScheduled] = useState(false);
  const [scheduledDateTime, setScheduledDateTime] = useState('');
  const handleCommunicationTypeChange = (e) => {
    setCommunicationType(e.target.value);
  };
 
  const handleBulkOptionChange = () => {
    setIsBulk(!isBulk);
  };

  const handleContactsChange = (e) => {
    setContacts(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleScheduledOptionChange = () => {
    setIsScheduled(!isScheduled);
  };

  const handleScheduledDateTimeChange = (e) => {
    setScheduledDateTime(e.target.value);
  };
  
  /*modal*/
  const [selectvar, setSelectvar] = useState('');
  const [filename, setFilename] = useState(null);
  const [sheetname, setSheetname] = useState([]);
  const [showModal, setShowModal] = useState(false);
  function asignarVariables (e)  {
    setSelectvar(e.target.value);
    setMessage(message +'{{'+e.target.value+'}}')
  }
  const handleFile = async (e) => {
    const file = e.target.files[0];
    setFilename(file.name);

    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const raw_data = XLSX.utils.sheet_to_json(worksheet);
    setSheetname(raw_data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <div className="sends-section"> {/* Aplica la clase CSS al contenedor */}
    <Sidebar/>
      <h1 className="sends-title">Envío de Comunicación</h1> {/* Aplica la clase CSS al título */}

      <div>
        <label className="sends-label">Tipo de Comunicación:</label>
        <select className="sends-select" value={communicationType} onChange={handleCommunicationTypeChange}>
        <option value="sms">Mensaje de Texto</option>
          <option value="sms_doble_via">Mensaje Doble Vía</option>
          <option value="llamadas">Llamadas</option>
          <option value="llamadas_doble_via">Llamadas Doble Vía</option>
          {/* ...opciones del select */}
        </select>
      </div>

      <div>
        <label className="sends-label">Opción de Envío:</label>
        {/* ...radio buttons */}
        <input
          type="radio"
          name="bulk"
          value="masivo"
          checked={isBulk}
          onChange={handleBulkOptionChange}
        />
        <label>Envío Masivo</label>

          <input
            type="radio"
            name="bulk"
            value="simple"
            checked={!isBulk}
            onChange={handleBulkOptionChange}
          />
          <label>Envío Simple</label>
                </div>

      {isBulk ? (
        <div className='parse-excel'>
          <h1>Selecciona un archivo</h1>
      <input type="file" onChange={(e) => handleFile(e)} />

      {sheetname.length > 0 && (
        <div>
          <h1>Elige un variable</h1>
          <select className="var-select" value={selectvar}onChange={asignarVariables} >
            
            {Object.keys(sheetname[0]).map((columnName, index) => (  
              <option key={index} value={columnName} onChange={asignarVariables} >
                {columnName}
              </option>
            ))}
          </select>

          <Modal show={showModal} onClose={closeModal} title="Datos del archivo" data={
            <table>
              <thead>
                <tr>
                  {Object.keys(sheetname[0]).map((columnName, index) => (
                    <th key={index}>{columnName}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sheetname.map((rowData, index) => (
                  <tr key={index}>
                    {Object.keys(sheetname[0]).map((columnName, columnIndex) => (
                      <td key={columnIndex}>{rowData[columnName]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          } />
        </div>
      )}
        </div>
      ) : (
        <div>
          <label className="sends-label">Números de Contacto (separados por comas):</label>
          <textarea className="sends-textarea" value={contacts} onChange={handleContactsChange} />
        </div>
      )}

      <div>
        <label className="sends-label">Mensaje:</label>
        <textarea className="sends-textarea" value={message} onChange={handleMessageChange} />
      </div>

      <div>
        <label className="sends-label">Programar Envío:</label>
        <input
          type="checkbox"
          checked={isScheduled}
          onChange={handleScheduledOptionChange}
        />
      </div>

      {isScheduled && (
        <div>
          <label className="sends-label">Fecha y Hora de Envío:</label>
          <input
            type="datetime-local"
            value={scheduledDateTime}
            onChange={handleScheduledDateTimeChange}
          />
        </div>
      )}

      <button className="sends-button">Enviar</button> {/* Aplica la clase CSS al botón */}
    </div>
  );
}

export default Sends;
