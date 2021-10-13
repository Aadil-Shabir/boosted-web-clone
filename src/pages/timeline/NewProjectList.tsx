import React, {useContext} from 'react';
import {makeStyles, Grid} from '@material-ui/core';
import styled from 'styled-components';
import Timer from 'react-compound-timer';
import StartButton from '../../components/Timer/StartTimerButton';
import ColorButtons from '../../components/projects/ColorButtons';
import TimelineContext from '../../store/timeline-context';

const DUMMY_DATA = [
  {
    userId: 'skdjfsld545s4das5d54sd',
    name: 'Learn React',
    color: '#123fff',
    startTime: Date.now(),
  },
  {
    userId: 'dss65ds6d4sd654sd6dsd',
    name: 'Learn MERN',
    color: '#da887c',
    startTime: Date.now(),
  },
  {
    userId: '5d4s5d4df5sdfsx51z5cs5d',
    name: 'Learn Firebase',
    color: '#aaa000',
    startTime: Date.now(),
  },
];

const ListWrapper = styled.ul`
  position: relative;
  width: 100%;
  margin: 10px auto 0;
  padding: 10px;
  box-sizing: border-box;
`;

const ListItems = styled.li`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 0;
  color: black;
  transition: 0.5s;
`;

const useStyles = makeStyles({
  listContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  strtBtn: {
    paddingTop: '21px',
  },
  nameControl: {
    paddingRight: '16px',
    marginRight: '16px',
  },
  color: {
    bottom: '30px',
  },
});

const NewProjectList: React.FC = () => {
  const classes = useStyles();
  const tmCtx = useContext(TimelineContext);

  // const startTimerHandler = () => {

  //   tmCtx.closeModalHandler();
  //   tmCtx.startProjectHandler();

  // };

  return (
    <Grid container>
      <ListWrapper>
        <Grid item xs={12}>
          {DUMMY_DATA.map((dd) => {
            return (
              <ListItems key={dd.userId}>
                <Grid item xs={12}>
                  <div className={classes.listContainer}>
                    <div>
                      <ColorButtons.TitleButton className={classes.color} />
                      <span>
                        {dd.name.length <= 20
                          ? dd.name
                          : `${dd.name.slice(0, 19)}...`}
                      </span>
                    </div>
                    <div className={classes.strtBtn}>
                      <Timer
                        startImmediately={false}
                        onStart={() => tmCtx.startProjectHandler()}
                      >
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {({start}: any) => (
                          <StartButton onClick={start}>Start</StartButton>
                        )}
                      </Timer>
                    </div>
                  </div>
                </Grid>
              </ListItems>
            );
          })}
        </Grid>
      </ListWrapper>
    </Grid>
  );
};

export default NewProjectList;
