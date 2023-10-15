// Dashboard.js
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, 
    LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement} from "chart.js";
    ChartJS.register (CategoryScale, PointElement, LinearScale, BarElement, LineElement, Title, Tooltip, Legend);    
function Dashboard() {
  // Datos de ejemplo para la gráfica de barras

  const barData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [
      {
        label: 'Ventas Mensuales',
        data: [12, 19, 3, 5, 2],
      backgroundColor: ['rgba(75, 192, 192, 0.6)','rgba(90, 234, 123 )']
      },
    ],
  };
  return (
    <>
    
      <h1>Dashboard</h1>
      <div className="chart">
        <Bar data={barData}  />
      </div>
     
    </>
  );
}



export {Dashboard} ;
