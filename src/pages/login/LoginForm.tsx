import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {Grid, Container, Typography} from '@material-ui/core';
import * as Yup from 'yup';
import {Formik, Form} from 'formik';
import TextField from '../../components/UI/FormTextField';
import Button from '../../components/UI/FormButton';
import AuthContext from '../../store/auth-context';
import {Link} from 'react-router-dom';
import {formStyles} from '../../components/UI/styles/forms.style';
import Bold from '../../bold.png';

const INITIAL_FORM_STATE = {
  email: '',
  password: '',
};

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string().email('Invalid email.').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm: React.FC = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const classes = formStyles();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const submitHandler = (values: any) => {
    {
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBKUadWbfl-g3mGKyg8RY8cvnGpCKnh8oI',
        {
          method: 'POST',
          body: JSON.stringify({
            email: values.email,
            password: values.password,
            returnSecureToken: true,
          }),
          headers: {
            'Content-type': 'application/json',
          },
        },
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
        .then((data) => {
          authCtx.login(data.idToken, data.localId);
          // authCtx.login(data.localId);
          history.replace('/timeline');
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <div className={classes.mainHeader}>
              <img src={Bold} width="70px" height="70px" />
              <Typography variant="h2">Boosted</Typography>
            </div>
            <div className={classes.formWrapper}>
              <Formik
                initialValues={{
                  ...INITIAL_FORM_STATE,
                }}
                validationSchema={FORM_VALIDATION}
                onSubmit={(values) => submitHandler(values)}
              >
                <Grid item xs={12}>
                  <div className={classes.formLayout}>
                    <Form>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Typography variant="h5" color="textPrimary">
                            Log in to Boosted
                          </Typography>
                        </Grid>

                        <Grid item xs={12}>
                          <TextField
                            name="email"
                            label="E-Mail Address"
                            type="email"
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <TextField
                            name="password"
                            label="Password"
                            type="password"
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <Button>Login</Button>
                        </Grid>

                        <Grid item xs={12}>
                          <Link to="/signup" className={classes.switch}>
                            Don&apos;t Have an Account? | Signup
                          </Link>
                        </Grid>

                        <Grid item xs={12}>
                          <Link to="/" className={classes.switchi}>
                            &lt; Go Back
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

export default LoginForm;
