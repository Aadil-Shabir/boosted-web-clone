import React from 'react';
import Timer from 'react-compound-timer/build';
import {makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles({
  timerCont: {
    display: 'inline-block',
    color: 'white',
    paddingTop: '12px',
    marginBottom: '20px',
  },
  today: {
    paddingLeft: '8px',
    paddingTop: '4px',
  },
  timer: {
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '6px',
  },
  timerTypo: {
    fontSize: '10px',
  },
  track: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '5px',
  },
});

const DispTimer: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.timerCont}>
      <div className={classes.track}>
        <Typography variant="h6">Tracking | </Typography>
        <Typography variant="subtitle1" className={classes.today}>
          TODAY
        </Typography>
      </div>
      <div className={classes.timer}>
        <Timer>
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
    </div>
  );
};

export default DispTimer;
