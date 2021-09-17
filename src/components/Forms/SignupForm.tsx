import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import TextField from '../UI/Forms-UI/TextField';
import Button from '../UI/Forms-UI/Button';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
    textAlign: 'center'
  }
}));

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: ''
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email.').required('Required'),
  phone: Yup.number()
    .required('Required')
    .typeError('Please enter a valid phone number')
    .integer(),
  password: Yup.string().required('Required')
});

const SignupForm: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <div className={classes.formWrapper}>
              <Formik
                initialValues={{
                  ...INITIAL_FORM_STATE
                }}
                validationSchema={FORM_VALIDATION}
                onSubmit={(values) => {
                  fetch(
                    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBKUadWbfl-g3mGKyg8RY8cvnGpCKnh8oI',
                    {
                      method: 'POST',
                      body: JSON.stringify({
                        email: values.email,
                        password: values.password,
                        returnSecureToken: true
                      }),
                      headers: {
                        'Content-Type': 'application/json'
                      }
                    }
                  )
                    .then((res) => {
                      if (res.ok) {
                        return res.json();
                      } else {
                        return res.json().then(() => {
                          const errorMessage = 'Authentication Failed';
                          throw new Error(errorMessage);
                        });
                      }
                    })
                    .then((data) => console.log(data));
                }}
              >
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h3">Signup</Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        name="firstName"
                        label="First Name"
                        type="text"
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        name="lastName"
                        label="Last Name"
                        type="text"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        name="email"
                        label="E-Mail Address"
                        type="email"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField name="phone" label="Ph#" type="integer" />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        name="password"
                        label="Password"
                        type="password"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button>Signup</Button>
                    </Grid>
                  </Grid>
                </Form>
              </Formik>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignupForm;
