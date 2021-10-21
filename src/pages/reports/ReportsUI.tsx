import React, {useState, useEffect} from 'react';
import {Typography, makeStyles, Grid} from '@material-ui/core';
import Selector from './Selector';
import styled from 'styled-components';
import AvrgDuration from './AvrgDuration';
import BarPlot from '../../components/graphs/BarPlot';
import DoughnutChart from '../../components/graphs/DoughnutChart';
import TotalProjects from './TotalProjects';

const Container = styled.div`
  text-align: center;
`;

const useStyles = makeStyles({
  heading: {
    fontSize: '4rem',
    fontFamily: 'Train One',
    textShadow: '1px 1px black',
    marginBottom: '0.8rem',
    color: 'black',
    textAlign: 'center',
  },
});

const ReportsUI: React.FC = () => {
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [chartData, setChartData] = useState<any>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [doughnutData, setDoughnutData] = useState<any>();

  const getChartData = () => {
    setChartData({
      labels: [
        'Sep 20',
        'Sep 25',
        'Sep 28',
        'Sep 30',
        'Oct 4',
        'Oct 7',
        'Oct 15',
      ],
      datasets: [
        {
          label: 'Boosted',
          data: [8, 5, 6, 5, 8, 2, 11],
          backgroundColor: ['green', 'red', 'blue', 'yellow', 'orange'],
          borderWidth: 0.3,
          barThickness: 12,
          hoverBorderColor: 'black',
          hoverBorderWidth: 0.6,
          categoryPercentage: 0.8,
          barPercentage: 0.5,
        },
      ],
    });
  };

  const getDoughnutData = () => {
    setDoughnutData({
      labels: [
        'Sep 20',
        'Sep 25',
        'Sep 28',
        'Sep 30',
        'Oct 4',
        'Oct 7',
        'Oct 15',
      ],
      datasets: [
        {
          data: [8, 5, 6, 5, 8, 2, 11, 3],
          backgroundColor: ['green', 'red', 'blue', 'yellow', 'orange'],
          borderWidth: 0.5,
          hoverBorderColor: 'black',
          hoverBorderWidth: 0.6,
        },
      ],
    });
  };

  useEffect(() => getChartData(), []);
  useEffect(() => getDoughnutData(), []);

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h1" className={classes.heading}>
            Reports
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Selector />
        </Grid>
        <Grid item xs={12}>
          <AvrgDuration />
        </Grid>
        <Grid item xs={12}>
          <BarPlot chartData={chartData} />
        </Grid>
        <Grid item xs={12}>
          <TotalProjects />
        </Grid>
        <Grid item xs={12}>
          <DoughnutChart doughnutData={doughnutData} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ReportsUI;
