import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';
import { useField } from 'formik';

const useStyles = makeStyles({
  textfields: {
    width: '90%'
  }
});

const TextfieldWrapper: React.FC<{
  name: string;
  label: string;
  type: string;
}> = ({ name, ...otherProps }) => {
  const [field, mata] = useField(name);
  const classes = useStyles();

  const configTextField: {
    fullWidth: boolean;
    error: boolean;
    helperText: string;
  } = {
    ...field,
    ...otherProps,
    fullWidth: true,
    error: false,
    helperText: ''
  };

  if (mata && mata.touched && mata.error) {
    configTextField.error = true;
    configTextField.helperText = mata.error;
  }

  return (
    <TextField
      className={classes.textfields}
      variant="outlined"
      {...configTextField}
    />
  );
};

export default TextfieldWrapper;
