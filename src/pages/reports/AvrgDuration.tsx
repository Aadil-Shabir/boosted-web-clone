import React, {useState} from 'react';
import {Divider, Typography, makeStyles} from '@material-ui/core';
import PopUp from './PopUp';
import CompTimer from '../../components/Timer/CompTimer';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '1.4rem',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 4rem',
    marginTop: '1rem',
    '&:hover': {
      backgroundColor: 'whitesmoke',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0',
    },
  },
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
  typo: {
    marginTop: '1.2rem',
  },
  text: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
    },
  },
}));

const AvrgDuration: React.FC = () => {
  const classes = useStyles();
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className={classes.container}>
      <Divider light={true} />
      {show && <PopUp />}
      <div className={classes.content} onClick={() => setShow((prev) => !prev)}>
        <div className={classes.typo}>
          <Typography variant="h6" className={classes.text}>
            Average daily tracked duration
          </Typography>
        </div>
        <CompTimer />
      </div>
    </div>
  );
};

export default AvrgDuration;
