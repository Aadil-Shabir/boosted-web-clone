import React from 'react';
import Timer from 'react-compound-timer';
import {makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  timer: {
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '6px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
      marginTop: '0.4rem',
    },
  },
  timerTypo: {
    fontSize: '10px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '8px',
    },
  },
}));

const CompTimer: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.timer}>
      <Timer startImmediately={false}>
        <div>
          <Timer.Hours
            formatValue={(value) => `${value < 10 ? `0${value}` : value}:`}
          />
          <Typography className={classes.timerTypo}>HRS</Typography>
        </div>
        <div>
          <Timer.Minutes
            formatValue={(value) => `${value < 10 ? `0${value}` : value}:`}
          />
          <Typography className={classes.timerTypo}>MIN</Typography>
        </div>
        <div>
          <Timer.Seconds
            formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
          />
          <Typography className={classes.timerTypo}>SEC</Typography>
        </div>
      </Timer>
    </div>
  );
};

export default CompTimer;
