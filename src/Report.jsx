// Report.js
import React from 'react';
import { useState } from 'react';
import './report.css'

function Report() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const generateReport = () => {
    // Aquí deberías implementar la lógica para generar el informe en formato Excel
    // Puedes utilizar bibliotecas como exceljs o xlsx para crear el archivo Excel.
    // A modo de ejemplo, aquí solo se mostrará un mensaje con las fechas seleccionadas.
    alert(`Generando informe desde ${startDate} hasta ${endDate}`);
  };
  return (
    <>
    <div className='report-section'>
    <h1 className='report-title'>Generar Informe</h1>
    <div>
        <label className='report-input-label'>Fecha de inicio:</label>
        <input className='report-input' type="date" value={startDate} onChange={handleStartDateChange} />
      </div>
      <div>
        <label className='report-input-label'>Fecha de fin:</label>
        <input className='report-input' type="date" value={endDate} onChange={handleEndDateChange} />
      </div>
      <button className='report-button' onClick={generateReport}>Generar Informe</button>
  
    </div>
    
    
    
  </>
  );
}

export {Report} ;
