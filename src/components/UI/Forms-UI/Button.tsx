import React from 'react';
import { Button as ButtonMui } from '@material-ui/core';
import { useFormikContext } from 'formik';

const Button: React.FC = ({ children }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton: { fullWidth: boolean; onClick: () => void } = {
    fullWidth: true,
    onClick: handleSubmit
  };

  return (
    <ButtonMui color="primary" variant="contained" {...configButton}>
      {children}
    </ButtonMui>
  );
};

export default Button;
