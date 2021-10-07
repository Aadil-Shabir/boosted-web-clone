/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import {Button, makeStyles} from '@material-ui/core';
import {PlayArrow} from '@material-ui/icons';

const useStyles = makeStyles({
  playBtn: {
    backgroundColor: '#e6e6e6',
    borderRadius: '5rem',
    height: '2rem',
  },
});

const StartButton = ({...props}: any) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.playBtn}
      variant="contained"
      startIcon={<PlayArrow />}
      {...props}
    >
      {/* eslint-disable-next-line react/prop-types */}
      {props.children}
    </Button>
  );
};
export default StartButton;
