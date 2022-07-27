// Libs
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Components

// Styles
import "../Profile.scss";

function SimpleChart ({labelMade, labelTotal, valueMade, valueTotal, colorMade, colorTotal}) {

    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
        labels: [labelMade, labelTotal],
        datasets: [
          {
            label: '# of Votes',
            data: [valueTotal, valueMade],
            backgroundColor: [
              colorMade,
              colorTotal
            ],
            borderColor: [
              'rgba(0, 0, 0, 0.5)',
              'rgba(255, 165, 0, .8)'
            ],
            borderWidth: 2,
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