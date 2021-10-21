import React, {useState} from 'react';

type TimelineContextObj = {
  showModal: boolean;
  showProjectTimer: boolean;
  timerView: string | null;
  showModalHandler: () => void;
  closeModalHandler: () => void;
  startProjectHandler: () => void;
  stopProjectHandler: () => void;
};

const TimelineContext = React.createContext<TimelineContextObj>({
  showModal: false,
  showProjectTimer: false,
  timerView: '',
  showModalHandler: () => {
    //
  },
  closeModalHandler: () => {
    //dsdf
  },
  startProjectHandler: () => {
    //fdf
  },
  stopProjectHandler: () => {
    //
  },
});

export const TimelineContextProvider: React.FC = (props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showProjectTimer, setShowProjectTimer] = useState<boolean>(false);
  const initialTimerView = localStorage.getItem('TimerView');
  const [timerView, setTimerView] = useState<string | null>(initialTimerView);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const startProjectHandler = () => {
    const rand = (Math.floor(Math.random() * 1000) * 100).toString();
    setShowProjectTimer(true);
    closeModalHandler();
    setTimerView(rand);
    localStorage.setItem('TimerView', rand);
  };

  const stopProjectHandler = () => {
    setShowProjectTimer(false);
    setTimerView(null);
    localStorage.removeItem('TimerView');
  };

  const TimelineContextValue: TimelineContextObj = {
    showModal: showModal,
    showProjectTimer: showProjectTimer,
    timerView: timerView,
    showModalHandler: showModalHandler,
    closeModalHandler: closeModalHandler,
    startProjectHandler: startProjectHandler,
    stopProjectHandler: stopProjectHandler,
  };

  return (
    <TimelineContext.Provider value={TimelineContextValue}>
      {props.children}
    </TimelineContext.Provider>
  );
};

export default TimelineContext;
