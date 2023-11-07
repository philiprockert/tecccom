import React, { useState } from "react";
import XLSX from 'xlsx';
import { Modal } from "./Modal";

function ParseExcel() {
  const [selectvar, setSelectvar] = useState('');
  const [filename, setFilename] = useState(null);
  const [sheetname, setSheetname] = useState([]);
  const [showModal, setShowModal] = useState(false);
  function asignarVariables (e)  {setSelectvar(e.target.value)
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
    <>
      <h1>Selecciona un archivo</h1>
      <input type="file" onChange={(e) => handleFile(e)} />

      {sheetname.length > 0 && (
        <div>
          <select className="var-select" value={selectvar} onChange={asignarVariables}>
            {Object.keys(sheetname[0]).map((columnName, index) => (
              <option key={index} value={columnName}>
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
    </>
  );
}

export { ParseExcel };
