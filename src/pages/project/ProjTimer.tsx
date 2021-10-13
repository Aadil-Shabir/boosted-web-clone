import React, {useContext} from 'react';
import {makeStyles, Typography, Grid} from '@material-ui/core';
import styled from 'styled-components';
import ProjectContext from '../../store/project-context';
import ColorButtons from '../../components/projects/ColorButtons';
import DispTimer from './DispTimer';

const TimerBox = styled.div`
  width: 600px;
  box-shadow: 1px 2px ${(props) => props.theme.tb};
  border-radius: 0.6rem;
  padding: 6px 16px;
  margin: 20px;
  background-image: ${(props) => props.theme.bg};
`;

const useStyles = makeStyles({
  titleCenter: {
    display: 'flex',
    justifyContent: 'center',
    margin: '16px 0',
  },
  center: {
    paddingTop: '1rem',
    color: '#C0C0C0',
  },
});

const ProjTimer: React.FC = () => {
  const classes = useStyles();
  const ProjCtx = useContext(ProjectContext);

  return (
    <Grid container>
      <TimerBox>
        <Grid item xs={12}>
          <div className={classes.titleCenter}>
            <ColorButtons.TitleButton />
            <Typography variant="h4" className={classes.center}>
              Learn React
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          {ProjCtx.showTimer && <DispTimer />}
        </Grid>
      </TimerBox>
    </Grid>
  );
};
export default ProjTimer;
