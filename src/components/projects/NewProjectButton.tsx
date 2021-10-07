import React from 'react';
import {makeStyles, Button} from '@material-ui/core';
import {Add} from '@material-ui/icons';

const useStyles = makeStyles({
  btn: {
    padding: '8px 20px',
    borderRadius: '2rem',
    fontSize: '0.8rem',
    backgroundColor: '#1a53ff',
    color: 'white',
    border: '0.01rem solid #1a53ff',
    boxShadow: '1px 2px #888888',
    cursor: 'pointer',
    marginTop: '0.8rem',
    '&:hover': {
      backgroundColor: '#4d79ff',
      boxShadow: '1px 2px #b3c4ff',
      border: 'none',
    },
  },
});

const NewProjectButton: React.FC<{handleOpen: () => void}> = (props) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.btn}
      startIcon={<Add />}
      onClick={props.handleOpen}
    >
      Add a new project
    </Button>
  );
};

export default NewProjectButton;
