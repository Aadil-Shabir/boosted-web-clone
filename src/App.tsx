import React from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Calendar from './pages/Calendar';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Timeline from './pages/Timeline';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/UI/Layout/Layout';
import { makeStyles } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#33ffad'
    }
  }
});

const useStyles = makeStyles({
  container: {
    display: 'flex',
    marginTop: 50
  }
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <Layout />
        <Switch>
          <Route path="/timeline" exact>
            <Timeline />
          </Route>
          <Route path="/reports" exact>
            <Reports />
          </Route>
          <Route path="/calendar" exact>
            <Calendar />
          </Route>
          <Route path="/settings" exact>
            <Settings />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
};

export default App;
