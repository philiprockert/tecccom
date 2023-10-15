// Dashboard.js
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';

function Dashboard() {
  // Datos de ejemplo para la gráfica de barras
  const barData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [
      {
        label: 'Ventas Mensuales',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  // Datos de ejemplo para la gráfica de pastel
  const pieData = {
    labels: ['Rojo', 'Verde', 'Azul'],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ['red', 'green', 'blue'],
      },
    ],
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="chart">
        <Bar data={barData} />
      </div>
      <div className="chart">
        <Pie data={pieData} />
      </div>
    </div>
  );
}



export default Dashboard;
