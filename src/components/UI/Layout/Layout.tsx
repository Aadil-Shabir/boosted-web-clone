import React, { useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AuthContext from '../../../store/auth-context';
import { useStyles } from './Layout.styles';

import MainNavigation from './MainNavigation';
import SideBar from './SideBar';

const Layout: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MainNavigation />
      {authCtx.isLoggedIn && <SideBar />}
    </div>
  );
};

export default Layout;
