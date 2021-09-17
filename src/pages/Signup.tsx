import React from 'react';
import SignupForm from '../components/Forms/SignupForm';
import { Grid } from '@material-ui/core';

const Signup: React.FC = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      spacing={0}
      style={{ minHeight: '100vh' }}
    >
      {/* <h1>This is the Signup</h1> */}
      <SignupForm />
    </Grid>
  );
};

export default Signup;
