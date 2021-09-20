import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import TextField from '../UI/Forms-UI/TextField';
import Button from '../UI/Forms-UI/Button';
import { Link } from 'react-router-dom';
import Bold from '../../bold.png';
import { formStyles } from './forms.style';

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
  const classes = formStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <div className={classes.mainHeader}>
              <img src={Bold} width="70px" height="70px" />
              <div>
                <Typography variant="h2">Boosted</Typography>
                {/* <Typography variant="h6">Productivity</Typography> */}
              </div>
            </div>
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
                <Grid container xs={12}>
                  <div className={classes.formLayout}>
                    <Form>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Typography variant="h5" color="textPrimary">
                            Sign up for your Account
                          </Typography>
                        </Grid>

                        <Grid item xs={12}>
                          <TextField
                            name="firstName"
                            label="First Name"
                            type="text"
                          />
                        </Grid>

                        <Grid item xs={12}>
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

                        <Grid item xs={12}>
                          <Link to="/login" className={classes.switch}>
                            Already Have an Account? | Log In
                          </Link>
                        </Grid>

                        <Grid item xs={12}>
                          <Link to="/" className={classes.switch}>
                            Home
                          </Link>
                        </Grid>
                      </Grid>
                    </Form>
                  </div>
                </Grid>
              </Formik>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignupForm;
