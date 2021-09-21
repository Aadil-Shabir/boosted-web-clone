import React from 'react';
import { Button as ButtonMui, makeStyles } from '@material-ui/core';
import { useFormikContext } from 'formik';

const useStyles = makeStyles({
  btn: {
    width: '90%',
    height: '3.4rem'
  }
});

const Button: React.FC = ({ children }) => {
  const { submitForm } = useFormikContext();
  const classes = useStyles();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton: { fullWidth: boolean; onClick: () => void } = {
    fullWidth: true,
    onClick: handleSubmit
  };

  return (
    <ButtonMui
      color="primary"
      variant="contained"
      className={classes.btn}
      {...configButton}
    >
      {children}
    </ButtonMui>
  );
};

export default Button;
