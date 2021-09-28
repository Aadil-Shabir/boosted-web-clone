import React, {useContext} from 'react';
import Login from './pages/login/index';
import Signup from './pages/signup/index';
import Calendar from './pages/Calendar';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Timeline from './pages/Timeline';
import {createTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import {Route, Switch, Redirect} from 'react-router-dom';
import Layout from './components/UI/Layout/Layout';
import {makeStyles} from '@material-ui/core';
import AuthContext from './store/auth-context';

const theme = createTheme({
  palette: {
    primary: {
      main: '#33ffad',
    },
  },
});

const useStyles = makeStyles({
  container: {
    display: 'flex',
    marginTop: 50,
  },
});

const App: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <Layout />
        <Switch>
          {authCtx.isLoggedIn && (
            <Route path="/timeline" exact>
              <Timeline />
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
    </ThemeProvider>
  );
};

export default App;
