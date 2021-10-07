import React from 'react';
import {Divider, Typography, makeStyles} from '@material-ui/core';
import DayActivity from './DayActivity';

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
  const date = new Date();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isToday = (date: any) => {
    const today = new Date();
    return date.getDate() == today.getDate()
      ? 'Today'
      : date
          .toLocaleDateString('en-GB', {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
          })
          .split(' ')
          .join(' ');
  };

  const today = isToday(date);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.upperLine}>
          <Typography variant="h4">{today}</Typography>
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
