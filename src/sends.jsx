import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { ParseExcel } from './ParseExcel';
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
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }
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
        <div>
          <ParseExcel />
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
