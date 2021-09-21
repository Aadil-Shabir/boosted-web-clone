import { makeStyles } from '@material-ui/core';

export const formStyles = makeStyles((theme) => ({
  mainHeader: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    '& h2': {
      fontFamily: 'Train One'
    },
    '& img': {
      marginTop: '6px',
      marginRight: '15px'
    }
  },
  formWrapper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(8),
    textAlign: 'center'
  },
  formLayout: {
    margin: '2rem',
    width: '100%',
    maxWidth: '25rem',
    borderRadius: '0.6rem',
    backgroundColor: 'white',
    boxShadow: '0 5px 7px rgba(0, 0, 0, 0.2)',
    padding: '1rem',
    textAlign: 'center',
    color: 'white'
  },
  switch: {
    marginTop: '1rem',
    backgroundColor: 'transparent',
    color: '#0000cc',
    border: 'none',
    padding: '0.15rem 1.5rem',
    '&:hover': {
      color: '#9f5ccc'
    }
  },
  switchi: {
    marginTop: '0',
    backgroundColor: 'transparent',
    color: '#0000cc',
    border: 'none',
    padding: '0.15rem 1.5rem',
    '&:hover': {
      color: '#9f5ccc'
    }
  }
}));
