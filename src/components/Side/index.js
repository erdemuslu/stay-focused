import React, { useState } from 'react';

import Selection from '../Selection';
import ProgressBar from '../ProgressBar';
import Timer from '../Timer';

const Side = () => {
  const [start, setStart] = useState(false);
  const [progressBarValue, setProgressBarValue] = useState(100);
  const [time] = useState(Date.now() + (60 * 25 * 1000));

  const handleTimer = () => {
    setStart((prevState) => !prevState);
  };

  const handleTick = () => {
    setProgressBarValue((prevState) => prevState - (100 / (60 * 25)));
  };

  return (
    <div className="side">
      <div className="side-header">
        <h1>StayFocused</h1>
        <Selection />
      </div>
      <div className="side-content">
        <div className="side-progress">
          <ProgressBar
            value={progressBarValue}
          />
          <Timer
            autoStart={false}
            start={start}
            time={time}
            onTick={handleTick}
          />
        </div>
        <div className="side-cta">
          <button
            type="button"
            className="btn"
            onClick={handleTimer}
          >
            {start ? 'Pause' : 'Start'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Side;
