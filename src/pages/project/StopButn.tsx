import React, {useContext} from 'react';
import {makeStyles, Button} from '@material-ui/core';
import {Stop} from '@material-ui/icons';
import ProjectContext from '../../store/project-context';

const useStyles = makeStyles({
  stopProjectBtn: {
    backgroundColor: 'red',
    padding: '10px 24px',
    borderRadius: '3rem',
    color: '#FAF9F6',
    '&:hover': {
      backgroundColor: '#CC444B',
    },
  },
});

const StopBtn: React.FC = () => {
  const classes = useStyles();
  const ProjCtx = useContext(ProjectContext);

  return (
    <Button
      variant="contained"
      startIcon={<Stop />}
      className={classes.stopProjectBtn}
      onClick={ProjCtx.stopClickHandler}
    >
      Stop Project
    </Button>
  );
};

export default StopBtn;
