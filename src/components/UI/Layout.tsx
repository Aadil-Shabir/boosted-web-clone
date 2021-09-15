import React from 'react';
import clsx from 'clsx';
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
  createTheme
} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import { ThemeProvider } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from 'react-router-dom';
import {
  Timeline,
  Assessment,
  CalendarToday,
  Timer,
  Settings
} from '@material-ui/icons';

const drawerWidth = 240;

const themer = createTheme({
  palette: {
    primary: {
      main: '#33ffad'
    }
  }
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    appBar: {
      flexGrow: 1,
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: 36
    },
    hide: {
      display: 'none'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap'
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1
      }
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar
    },
    super: {
      fontSize: 10,
      border: '0 solid white',
      borderRadius: 3,
      backgroundColor: '#ffb31a',
      color: 'white',
      padding: '2px 4px',
      boxShadow: '1px 1px  #b37700'
    },
    btn: {
      float: 'right'
    }
  })
);

const Layout: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const itemsList = [
    {
      text: 'Timeline',
      icon: <Timeline />,
      onClick: () => history.push('/timeline')
    },
    {
      text: 'Reports',
      icon: <Assessment />,
      onClick: () => history.push('/reports')
    }
  ];

  const calendarItem = {
    text: 'Calendar',
    icon: <CalendarToday />,
    onClick: () => history.push('/calendar')
  };

  const timersItem = { text: 'Timers', icon: <Timer /> };

  const settingsItem = {
    text: 'Settings',
    icon: <Settings />,
    onClick: () => history.push('/settings')
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={themer}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          color="primary"
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap style={{ flexGrow: 1 }}>
              Boosted - Productivity
            </Typography>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Signup</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {itemsList.map((item) => {
              const { text, icon, onClick } = item;
              return (
                <ListItem button key={text} onClick={onClick}>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItem>
              );
            })}
            <ListItem button key={timersItem.text}>
              {timersItem.icon && (
                <ListItemIcon>{timersItem.icon}</ListItemIcon>
              )}
              <ListItemText>
                Timers{' '}
                <sup className={classes.super}>
                  <b>Coming Soon</b>
                </sup>
              </ListItemText>
            </ListItem>
            <ListItem
              button
              key={calendarItem.text}
              onClick={calendarItem.onClick}
            >
              {calendarItem.icon && (
                <ListItemIcon>{calendarItem.icon}</ListItemIcon>
              )}
              <ListItemText primary={calendarItem.text} />
            </ListItem>
          </List>

          <Divider />
          <ListItem
            button
            key={settingsItem.text}
            onClick={settingsItem.onClick}
          >
            {settingsItem.icon && (
              <ListItemIcon>{settingsItem.icon}</ListItemIcon>
            )}
            <ListItemText primary={settingsItem.text} />
          </ListItem>
        </Drawer>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
