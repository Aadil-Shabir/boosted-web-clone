import React, { useContext } from 'react';

import { useHistory } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from '@material-ui/core';
import AuthContext from '../../../store/auth-context';
import LayoutContext from '../../../store/layout-context';
import { Menu } from '@material-ui/icons';
import clsx from 'clsx';
import { useStyles } from './Layout.styles';
import { useLocation } from 'react-router';

const MainNavigation: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const layoutCtx = useContext(LayoutContext);
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const loginHandler = () => {
    history.push('/login');
  };

  const signupHandler = () => {
    history.push('/signup');
  };

  const logoutHandler = () => {
    authCtx.logout();
    history.push('/login');
  };

  return (
    <AppBar
      color="primary"
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: layoutCtx.sidebar
      })}
    >
      <Toolbar>
        {location.pathname === '/' ? null : (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={layoutCtx.openDrawer}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: layoutCtx.sidebar
            })}
          >
            <Menu />
          </IconButton>
        )}
        <Typography variant="h6" noWrap style={{ flexGrow: 1 }}>
          Boosted - Productivity
        </Typography>
        {!authCtx.isLoggedIn && (
          <Button color="inherit" onClick={loginHandler}>
            Login
          </Button>
        )}
        {!authCtx.isLoggedIn && (
          <Button color="inherit" onClick={signupHandler}>
            Signup
          </Button>
        )}
        {authCtx.isLoggedIn && (
          <Button color="inherit" onClick={logoutHandler}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MainNavigation;
