import React, {useContext} from 'react';
import Login from './pages/login/index';
import Signup from './pages/signup/index';
import Calendar from './pages/Calendar';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Timeline from './pages/timeline/Timeline';
import Project from './pages/project/Project';
import {createTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import {Route, Switch, Redirect} from 'react-router-dom';
import Layout from './components/UI/Layout/Layout';
import {makeStyles} from '@material-ui/core';
import ChildModalContext from './store/childModal-context';
import AuthContext from './store/auth-context';
import {ThemeProvider as SCThemeProvider} from 'styled-components';

const theme = createTheme({
  palette: {
    primary: {
      main: '#33ffad',
    },
  },
  typography: {
    h5: {
      fontSize: '1.5rem',
    },
  },
});

const useStyles = makeStyles({
  container: {
    display: 'flex',
    marginTop: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const App: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const cmCtx = useContext(ChildModalContext);
  const classes = useStyles();

  const SCTheme = {
    bg: cmCtx.bgColor,
    tb: cmCtx.titleBtnColor,
  };

  return (
    <ThemeProvider theme={theme}>
      <SCThemeProvider theme={SCTheme}>
        <div className={classes.container}>
          <Layout />
          <Switch>
            {authCtx.isLoggedIn && (
              <Route path="/timeline" exact>
                <Timeline />
              </Route>
            )}
            {authCtx.isLoggedIn && (
              <Route path="/project" exact>
                <Project />
              </Route>
            )}
            {authCtx.isLoggedIn && (
              <Route path="/reports" exact>
                <Reports />
              </Route>
            )}
            {authCtx.isLoggedIn && (
              <Route path="/calendar" exact>
                <Calendar />
              </Route>
            )}
            {authCtx.isLoggedIn && (
              <Route path="/settings" exact>
                <Settings />
              </Route>
            )}
            {!authCtx.isLoggedIn && (
              <Route path="/login" exact>
                <Login />
              </Route>
            )}
            {!authCtx.isLoggedIn && (
              <Route path="/signup" exact>
                <Signup />
              </Route>
            )}
            {authCtx.isLoggedIn && (
              <Route path="*">
                <Redirect to="/timeline"></Redirect>
              </Route>
            )}
            {!authCtx.isLoggedIn && (
              <Route path="*">
                <Redirect to="/" />
              </Route>
            )}
          </Switch>
        </div>
      </SCThemeProvider>
    </ThemeProvider>
  );
};

export default App;
