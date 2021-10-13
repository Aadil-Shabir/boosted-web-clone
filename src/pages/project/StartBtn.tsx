import React, {useContext} from 'react';
import {makeStyles, Button} from '@material-ui/core';
import ProjectContext from '../../store/project-context';
import {PlayArrow} from '@material-ui/icons';

const useStyles = makeStyles({
  strtProjectBtn: {
    backgroundColor: '#09e85e',
    padding: '10px 24px',
    borderRadius: '3rem',
    color: '#FAF9F6',
    '&:hover': {
      backgroundColor: '#50C878',
    },
  },
});

const StartBtn: React.FC = () => {
  const classes = useStyles();
  const ProjCtx = useContext(ProjectContext);

  return (
    <Button
      variant="contained"
      startIcon={<PlayArrow />}
      onClick={ProjCtx.startClickHandler}
      className={classes.strtProjectBtn}
    >
      Start Project
    </Button>
  );
};

export default StartBtn;
