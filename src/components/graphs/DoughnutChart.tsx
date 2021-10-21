import React from 'react';
import {Typography, makeStyles} from '@material-ui/core';
import {Doughnut} from 'react-chartjs-2';
import {AnyObject} from 'chart.js/types/basic';

const useStyles = makeStyles({
  topDist: {
    marginTop: '10px',
  },
  inner: {
    marginTop: '-170px',
    marginBottom: '100px',
  },
  innerH6: {
    marginBottom: '5px',
    marginTop: '0',
  },
  projectsTracked: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DoughnutChart: React.FC<{doughnutData: any}> = (props) => {
  const classes = useStyles();

  const options: AnyObject = {
    maintainAspectRatio: false,
    aspectRatio: 8,
    plugins: {
      legend: {
        display: false,
        position: 'right',
      },
      title: {
        text: 'Doughnut Chart',
      },
    },
    cutout: 110,
    responsive: true,
  };

  return (
    <div>
      <div className={classes.topDist}>
        <div style={{height: '37vh', width: '100vw', minHeight: '200px'}}>
          <Doughnut
            width={200}
            height={200}
            data={props.doughnutData}
            options={options}
          />
        </div>
        <div className={classes.inner}>
          <Typography variant="h6" className={classes.innerH6}>
            8hrs 15mins
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
