import React from 'react';
import Timer from 'react-compound-timer';
import StartButton from './StartTimerButton';

const StopWatch: React.FC = () => {
  return (
    <Timer
      startImmediately={false}
      onStart={() => console.log('onStart hook')}
      onResume={() => console.log('onResume hook')}
      onPause={() => console.log('onPause hook')}
      onStop={() => console.log('onStop hook')}
      onReset={() => console.log('onReset hook')}
    >
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {({start, resume, pause, stop, reset}: any) => (
        <React.Fragment>
          <div>
            <Timer.Hours /> :
            <Timer.Minutes /> :
            <Timer.Seconds />
          </div>
          <br />
          <div>
            <StartButton onClick={start}>Start</StartButton>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
          </div>
        </React.Fragment>
      )}
    </Timer>
  );
};

export default StopWatch;
