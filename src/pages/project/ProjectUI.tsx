import React, {useContext} from 'react';
import {Typography, makeStyles, Grid} from '@material-ui/core';
import styled from 'styled-components';
import ProjectContext from '../../store/project-context';
import ProjTimer from './ProjTimer';
import StartBtn from './StartBtn';
import StopBtn from './StopButn';
import TimeLogContainer from './TimeLogContainer';

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  justify-content: center;
`;

const useStyles = makeStyles({
  heading: {
    fontSize: '4rem',
    fontFamily: 'Train One',
    textShadow: '1px 1px black',
    marginBottom: '0.8rem',
    color: 'black',
  },
});

const ProjectUI: React.FC = () => {
  const classes = useStyles();
  const ProjCtx = useContext(ProjectContext);

  return (
    <React.Fragment>
      <Grid container>
        <ContentWrapper>
          <Grid item xs={12}>
            <Typography variant="h1" className={classes.heading}>
              Project
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ProjTimer />
          </Grid>
          <Grid item xs={12}>
            {ProjCtx.showTimer ? <StopBtn /> : <StartBtn />}
          </Grid>
          <Grid item xs={12}>
            <TimeLogContainer />
          </Grid>
        </ContentWrapper>
      </Grid>
    </React.Fragment>
  );
};

export default ProjectUI;
