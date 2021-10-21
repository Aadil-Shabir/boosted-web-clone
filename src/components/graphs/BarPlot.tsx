import React from 'react';
import {Divider, Typography} from '@material-ui/core';
import {Bar} from 'react-chartjs-2';
import {ChartData, ChartOptions} from 'chart.js';

const BarPlot: React.FC<{chartData: ChartData}> = (props) => {
  const options: ChartOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Time Stamps',
        fullSize: true,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    aspectRatio: 6,
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div style={{position: 'relative', margin: 'auto'}}>
      <Divider light={true} />
      <Typography variant="h6">Duration per day</Typography>
      <div style={{height: '30vh'}}>
        <Bar data={props.chartData} options={options}></Bar>
      </div>
      <Divider />
    </div>
  );
};

export default BarPlot;
