import React from 'react';
import { TextField } from '@material-ui/core';
import { useField } from 'formik';

const TextfieldWrapper: React.FC<{
  name: string;
  label: string;
  type: string;
}> = ({ name, ...otherProps }) => {
  const [field, mata] = useField(name);

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

  return <TextField variant="outlined" {...configTextField} />;
};

export default TextfieldWrapper;
