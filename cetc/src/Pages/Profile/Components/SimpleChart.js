// Libs
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Components

// Styles
import "../Profile.scss";

function SimpleChart () {

    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
        labels: ['Red', 'Blue'],
        datasets: [
          {
            label: '# of Votes',
            data: [80, 20],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
        <div className="SimpleChart">
            <Doughnut data={data} />
        </div>
    );
}

export default SimpleChart;