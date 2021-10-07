import React, {useContext} from 'react';
import {Typography, makeStyles, Grid, Button} from '@material-ui/core';
import styled from 'styled-components';
import {ArrowDropDownSharp} from '@material-ui/icons';
import TransitionsModal from '../modals/ProjectsModal';
import ProjectTimer from './ProjectTimer';
import ProductivityLog from './ProductivityLog';
import TimelineContext from '../../store/timeline-context';

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  justify-content: center;
`;

const LogContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: left;
`;

const useStyles = makeStyles({
  heading: {
    fontSize: '5rem',
    fontFamily: "'Gemunu Libre', Sans-serif",
    textShadow: '3px 3px #d6f5d6',
    marginBottom: '0.8rem',
  },
  btn: {
    padding: '8px 20px',
    borderRadius: '2rem',
    fontSize: '1.1rem',
    backgroundColor: '#1a53ff',
    color: 'white',
    border: '0.01rem solid #1a53ff',
    boxShadow: '1px 2px #888888',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#4d79ff',
      boxShadow: '1px 2px #b3c4ff',
    },
  },
});

const TimelineUI: React.FC = () => {
  const tmCtx = useContext(TimelineContext);
  const classes = useStyles();

  return (
    <>
      <ContentWrapper>
        <Grid container>
          <Grid item xs={12}>
            <TransitionsModal />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" className={classes.heading}>
              Timeline
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              startIcon={<ArrowDropDownSharp />}
              className={classes.btn}
              onClick={tmCtx.showModalHandler}
            >
              Projects
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {tmCtx.timerView && <ProjectTimer />}
        </Grid>
      </ContentWrapper>
      <LogContainer>
        <Grid container>
          <Grid item xs={12}>
            <ProductivityLog />
          </Grid>
        </Grid>
      </LogContainer>
    </>
  );
};

export default TimelineUI;
