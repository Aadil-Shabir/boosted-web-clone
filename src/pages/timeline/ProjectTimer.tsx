import React, {useContext} from 'react';
import styled from 'styled-components';
import {Typography, makeStyles, Button, Grid} from '@material-ui/core';
import Timer from 'react-compound-timer';
import TimelineContext from '../../store/timeline-context';

const TimerBox = styled.div`
  width: 600px;
  box-shadow: 1px 2px ${(props) => props.theme.tb};
  border-radius: 0.6rem;
  padding: 8px 16px;
  margin: 20px;
  opacity: 1;
  background-image: ${(props) => props.theme.bg};
`;

const NumberHolder = styled.div`
  width: 48px;
  border: 1px solid black;
  border-radius: 0.5rem;
  background-color: #ebebe0;
  color: black;
`;

const useStyles = makeStyles({
  font: {
    fontSize: '2rem',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
  },
  center: {
    marginTop: '1rem',
    color: 'white',
  },
  lining: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  btnContainer: {
    display: 'absolute',
    justifyContent: 'center',
    color: 'white',
    marginTop: '1rem',
  },
  stopBtn: {
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: '#f2f2f2',
      color: 'black',
    },
  },
});

const ProjectTimer: React.FC = () => {
  const classes = useStyles();
  const tmCtx = useContext(TimelineContext);

  return (
    <Grid container>
      <TimerBox>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.center}>
            Learn React
          </Typography>
        </Grid>
        <br></br>
        <Grid item xs={12}>
          {tmCtx.timerView && (
            <Timer
              startImmediately={true}
              onStop={() => {
                tmCtx.stopProjectHandler();
              }}
            >
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {({stop}: any) => (
                <React.Fragment>
                  <div className={classes.font}>
                    <div className={classes.lining}>
                      <NumberHolder>
                        <Timer.Hours
                          formatValue={(value) =>
                            `${value < 10 ? `0${value}` : value}`
                          }
                        />
                        <Typography variant="body2">HRS</Typography>
                      </NumberHolder>

                      <NumberHolder>
                        <Timer.Minutes
                          formatValue={(value) =>
                            `${value < 10 ? `0${value}` : value}`
                          }
                        />
                        <Typography variant="body2">MIN</Typography>
                      </NumberHolder>

                      <NumberHolder>
                        <Timer.Seconds
                          formatValue={(value) =>
                            `${value < 10 ? `0${value}` : value} `
                          }
                        />
                        <Typography variant="body2">SEC</Typography>
                      </NumberHolder>
                    </div>
                  </div>
                  <div className={classes.btnContainer}>
                    <Button
                      variant="text"
                      color="inherit"
                      className={classes.stopBtn}
                      onClick={stop}
                    >
                      Stop
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </Timer>
          )}
        </Grid>
      </TimerBox>
    </Grid>
  );
};

export default ProjectTimer;
