import React, {useState} from 'react';

type ProjectContextObj = {
  showTimer: boolean;
  startClickHandler: () => void;
  stopClickHandler: () => void;
  timeBefore: string;
  timeAfter: string;
  dateHandler: () => void;
  timeDiff: string;
};

const ProjectContext = React.createContext<ProjectContextObj>({
  showTimer: false,
  startClickHandler: () => {
    // Handles the Start
  },
  stopClickHandler: () => {
    // Handles the Stop
  },
  timeBefore: '',
  timeAfter: '',
  dateHandler: () => {
    // Handles the date changes
  },
  timeDiff: '',
});

export const ProjectContextProvider: React.FC = (props) => {
  const [showTimer, setShowTimer] = useState(false);
  const [timeBefore, setTimeBefore] = useState('');
  const [timeAfter, setTimeAfter] = useState('');
  const [a, setA] = useState(0);
  const [timeDiff, setTimeDiff] = useState('');

  const addZero = (i: string | number) => {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  };

  const dateHanadler = () => {
    const date = new Date();
    const hours = addZero(date.getHours());
    const mins = addZero(date.getMinutes());
    return {
      hours,
      mins,
    };
  };

  let b = 0;

  const handleStartClick = () => {
    setShowTimer(true);
    setTimeBefore(`${dateHanadler().hours}:${dateHanadler().mins}  -`);
    setA(Date.now());
  };

  const handleStopClick = () => {
    setShowTimer(false);
    setTimeAfter(`${dateHanadler().hours}:${dateHanadler().mins}`);
    b = Date.now();
    const c = b - a;
    const date = new Date(c - 1.8e7);

    setTimeDiff(
      `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(
        date.getSeconds(),
      )}`,
    );
  };

  const ProjectContextValue = {
    showTimer: showTimer,
    startClickHandler: handleStartClick,
    stopClickHandler: handleStopClick,
    timeBefore: timeBefore,
    timeAfter: timeAfter,
    dateHandler: dateHanadler,
    timeDiff: timeDiff,
  };

  return (
    <ProjectContext.Provider value={ProjectContextValue}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;
