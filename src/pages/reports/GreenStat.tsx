import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';
import {CallMadeRounded} from '@material-ui/icons';

const useStyles = makeStyles({
  green: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0.5rem',
    backgroundColor: '#BBF2D7',
    border: '0 solid black',
    borderRadius: '1rem',
    padding: '5px 5px',
    color: '#35AC82',
  },
  text: {
    marginTop: '3px',
    paddingRight: '2px',
  },
});

const GreenStat: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.green}>
      <CallMadeRounded fontSize="inherit" className={classes.text} />
      <Typography variant="caption">&gt;9999%</Typography>
    </div>
  );
};

export default GreenStat;
