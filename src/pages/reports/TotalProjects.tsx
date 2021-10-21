import React from 'react';
import {Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `linear-gradient(to right, #6EB4D1, #7A8B99)`,
    color: 'white',
    width: '300px',
    marginTop: '10px',
    borderRadius: '10px',
  },
  holder: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

const TotalProjects: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.holder}>
      <div className={classes.container}>
        <Typography variant="h6">Projects Tracked</Typography>
        <Typography variant="h6">0</Typography>
      </div>
    </div>
  );
};

export default TotalProjects;
