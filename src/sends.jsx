import React, { useState } from 'react';
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

  return (
    <div className="sends-section"> {/* Aplica la clase CSS al contenedor */}
      <h1 className="sends-title">Envío de Comunicación</h1> {/* Aplica la clase CSS al título */}

      <div>
        <label className="sends-label">Tipo de Comunicación:</label>
        <select className="sends-select" value={communicationType} onChange={handleCommunicationTypeChange}>
          {/* ...opciones del select */}
        </select>
      </div>

      <div>
        <label className="sends-label">Opción de Envío:</label>
        {/* ...radio buttons */}
      </div>

      {isBulk ? (
        <div>
          <label className="sends-label">Números de Contacto (cargar archivo Excel):</label>
          <input type="file" accept=".xlsx, .csv" />
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
