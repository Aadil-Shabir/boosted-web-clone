import React from 'react';
import LoginForm from '../components/Forms/LoginForm';
import { Grid } from '@material-ui/core';

const Login: React.FC = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      spacing={0}
      style={{ minHeight: '80vh' }}
    >
      <LoginForm />
    </Grid>
  );
};

export default Login;
