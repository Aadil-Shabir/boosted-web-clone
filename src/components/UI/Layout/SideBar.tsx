import React, { useContext } from 'react';
import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme
} from '@material-ui/core';
import {
  ChevronLeft,
  ChevronRight,
  Timeline,
  Assessment,
  CalendarToday,
  Timer,
  Settings
} from '@material-ui/icons';
import LayoutContext from '../../../store/layout-context';
import { useStyles } from './Layout.styles';
import { useHistory } from 'react-router';
import clsx from 'clsx';

const SideBar: React.FC = () => {
  const layoutCtx = useContext(LayoutContext);
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
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

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: layoutCtx.sidebar,
        [classes.drawerClose]: !layoutCtx.sidebar
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: layoutCtx.sidebar,
          [classes.drawerClose]: !layoutCtx.sidebar
        })
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={layoutCtx.closeDrawer}>
          {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
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
          {timersItem.icon && <ListItemIcon>{timersItem.icon}</ListItemIcon>}
          <ListItemText>
            Timers{' '}
            <sup className={classes.super}>
              <b>Coming Soon</b>
            </sup>
          </ListItemText>
        </ListItem>
        <ListItem button key={calendarItem.text} onClick={calendarItem.onClick}>
          {calendarItem.icon && (
            <ListItemIcon>{calendarItem.icon}</ListItemIcon>
          )}
          <ListItemText primary={calendarItem.text} />
        </ListItem>
      </List>

      <Divider />
      <ListItem button key={settingsItem.text} onClick={settingsItem.onClick}>
        {settingsItem.icon && <ListItemIcon>{settingsItem.icon}</ListItemIcon>}
        <ListItemText primary={settingsItem.text} />
      </ListItem>
    </Drawer>
  );
};

export default SideBar;
