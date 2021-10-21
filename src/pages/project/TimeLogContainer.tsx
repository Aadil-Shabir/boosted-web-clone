import React, {useContext} from 'react';
import ProjDate from '../../components/projects/ProjDate';
import styled from 'styled-components';
import ProjectContext from '../../store/project-context';
import {Divider, Typography} from '@material-ui/core';

const DateHolder = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem 1rem;
`;

const TimeHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;

const TimeLogContainer: React.FC = () => {
  const ProjCtx = useContext(ProjectContext);

  return (
    <div>
      <DateHolder>
        <ProjDate />
      </DateHolder>
      <Divider />
      <TimeHolder>
        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
          <Typography>
            {ProjCtx.timeBefore}
            {ProjCtx.showTimer ? '     ...' : null}
          </Typography>
          <Typography
            style={{paddingLeft: '5px'}}
          >{` ${ProjCtx.timeAfter} `}</Typography>
        </div>
        <Typography>
          {ProjCtx.showTimer ? (
            <Typography style={{color: 'red'}}>Tracking</Typography>
          ) : (
            ProjCtx.timeDiff
          )}
        </Typography>
      </TimeHolder>
    </div>
  );
};

export default TimeLogContainer;
