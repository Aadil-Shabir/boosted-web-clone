import React, {ReactNode} from 'react';
import {Grid, makeStyles} from '@material-ui/core';

import {ofcWorkSvg, slamDunkSvg} from '../icons';

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
    maxWidth: '100%',
  },
  leftLarge: {
    position: 'absolute',
    width: '400px',
    bottom: '0',
    left: '0',
    zIndex: -999,
    maxWidth: '30%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  rightLarge: {
    position: 'absolute',
    width: '300px',
    bottom: '0',
    right: '0',
    zIndex: -999,
    maxWidth: '30%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

type WithAuthLayoutType = (children: ReactNode) => React.FC;

/**
 * Auth Layout.
 * Renders some svg icons in bg. Use for login and sign up forms.
 */
const AuthLayout: React.FC & {withAuthLayout: WithAuthLayoutType} = ({
  // eslint-disable-next-line react/prop-types
  children,
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid container justifyContent="center" alignContent="center" spacing={0}>
        {children}
      </Grid>
      <Grid item>
        <div className={classes.background}>
          <div className={classes.rightLarge}>
            <img src={slamDunkSvg} />
          </div>
          <div className={classes.leftLarge}>
            <img src={ofcWorkSvg} />
          </div>
        </div>
      </Grid>
    </>
  );
};

export const withAuthLayout: WithAuthLayoutType = (children) => {
  const AuthPage = () => <AuthLayout>{children}</AuthLayout>;
  return AuthPage;
};

AuthLayout.withAuthLayout = withAuthLayout;

export default AuthLayout;
