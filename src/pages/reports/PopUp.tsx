import * as React from 'react';
import {Box} from '@material-ui/core';
import {Card} from '@material-ui/core';
import {CardContent} from '@material-ui/core';
import {Typography, makeStyles} from '@material-ui/core';
import CompTimer from '../../components/Timer/CompTimer';
import GreenStat from './GreenStat';

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {
    marginTop: '1rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '11px',
    },
  },
  container: {
    // width: '600px',
    // height: '200px',
    position: 'relative',
    margin: '20px',
    zIndex: 1,
    [theme.breakpoints.down('xs')]: {
      margin: '0',
      padding: '0',
    },
  },
  stackTop: {
    zIndex: 9,
    margin: '20px',
    width: '100%',
    boxShadow: '2px 4px gray',
    border: '1px solid #F5F5F5',
    borderRadius: '5px',
  },
  txt: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '10px',
      marginTop: '8px',
    },
  },
}));

const PopUp: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Box
        sx={{
          maxWidth: 500,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <Card variant="outlined" className={classes.stackTop}>
          <CardContent>
            <Typography color="secondary" gutterBottom>
              Average daily tracked duration
            </Typography>
            <div className={classes.content}>
              <Typography variant="h6" className={classes.text}>
                includes only days with records
              </Typography>
              <CompTimer />
            </div>
            <div className={classes.content}>
              <Typography variant="body2" className={classes.txt}>
                vs previous period <br />
                20 Aug 2021 - 18 Sep 2021
              </Typography>
              <GreenStat />
            </div>
            <div className={classes.content}>
              <Typography variant="h6" className={classes.text}>
                includes all days
              </Typography>
              <CompTimer />
            </div>
            <div className={classes.content}>
              <Typography variant="body2" className={classes.txt}>
                vs previous period <br />
                20 Aug 2021 - 18 Sep 2021
              </Typography>
              <GreenStat />
            </div>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default PopUp;
