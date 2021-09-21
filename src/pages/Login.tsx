import React from 'react';
import LoginForm from '../components/Forms/LoginForm';
import { Grid, makeStyles } from '@material-ui/core';
import { Slamdunk } from '../iconComponents';
import { OfcWork } from '../iconComponents';

const useStyles = makeStyles((theme) => ({
  background: {
    zIndex: -900,
    height: '100%',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    overflowX: 'hidden',
    overflowY: 'hidden',
    display: 'block',
    maxWidth: '100%'
  },
  leftLarge: {
    position: 'absolute',
    width: '400px',
    bottom: '0',
    left: '0',
    zIndex: -999,
    maxWidth: '30%',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  rightLarge: {
    position: 'absolute',
    width: '300px',
    bottom: '0',
    right: '0',
    zIndex: -999,
    maxWidth: '30%',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));

const Login: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignContent="center"
        spacing={0}
        // style={{ minHeight: '80vh' }}
      >
        <LoginForm />
      </Grid>
      <Grid item>
        <div className={classes.background}>
          <div className={classes.rightLarge}>
            <Slamdunk width="100%" />
          </div>
          <div className={classes.leftLarge}>
            <OfcWork />
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Login;
