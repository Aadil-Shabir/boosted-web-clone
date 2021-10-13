import React from 'react';
import {Divider, Typography, makeStyles} from '@material-ui/core';
import DayActivity from './DayActivity';
import ProjDate from '../../components/projects/ProjDate';

const useStyles = makeStyles({
  container: {
    marginTop: '1.2rem',
    width: '600px',
  },
  upperLine: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  totalTime: {
    paddingTop: '12px',
  },
});

const ProductivityLog: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.upperLine}>
          {/* <Typography variant="h4">{myDate}</Typography> */}
          <ProjDate />
          <Typography variant="body1" className={classes.totalTime}>
            02:15:22
          </Typography>
        </div>
        <Divider />
        <DayActivity />
      </div>
    </>
  );
};

export default ProductivityLog;
