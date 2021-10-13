import React from 'react';
import {Typography, makeStyles, Button, Divider} from '@material-ui/core';
import ColorButtons from '../../components/projects/ColorButtons';
import Timer from 'react-compound-timer';
import {PlayArrow} from '@material-ui/icons';

const DUMMY_DATA = [
  {
    projectId: 'fjdskfdjnldnldsj',
    name: 'Learn React',
    color: '#123fff',
    endTime: '03215345612',
  },
  {
    projectId: 'fjdskfdjdfdfs',
    name: 'Learn MERN',
    color: '#a5aa48',
    endTime: '03215354651',
  },
];

const useStyles = makeStyles({
  listContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  elementsJoin: {
    display: 'inherit',
    justifyContent: 'flex-start',
  },
  nameStyle: {
    paddingTop: '1.3rem',
  },
  playBtn: {
    backgroundColor: '#e6e6e6',
    borderRadius: '5rem',
    height: '2rem',
    marginTop: '1rem',
  },
});

const DayActivity: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      {DUMMY_DATA.map((dd) => {
        return (
          <div key={dd.projectId}>
            <div className={classes.listContainer}>
              <div className={classes.elementsJoin}>
                <ColorButtons.TitleButton />
                <Typography variant="h6" className={classes.nameStyle}>
                  {dd.name}
                </Typography>
              </div>
              <div>
                <Timer startImmediately={false}>
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {({start}: any) => (
                    <React.Fragment>
                      <Button
                        onClick={start}
                        className={classes.playBtn}
                        startIcon={<PlayArrow />}
                      >
                        <Timer.Hours
                          formatValue={(value) =>
                            `${value < 10 ? `0${value}` : value}:`
                          }
                        />
                        <Timer.Minutes
                          formatValue={(value) =>
                            `${value < 10 ? `0${value}` : value}:`
                          }
                        />
                        <Timer.Seconds
                          formatValue={(value) =>
                            `${value < 10 ? `0${value}` : value}`
                          }
                        />
                      </Button>
                    </React.Fragment>
                  )}
                </Timer>
              </div>
            </div>
            <Divider />
          </div>
        );
      })}
    </div>
  );
};

export default DayActivity;
