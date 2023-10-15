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
          backgroundColor: [
            'rgba(75, 192, 192, 0.6)',
            'rgba(90, 234, 123, 0.6)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(90, 234, 123, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
  
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
  
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="chart">
          <Bar data={barData} options={options} />
        </div>
      </div>
    );
}



export {Dashboard} ;
