import React, { createRef, useEffect } from 'react';
import { bool, func } from 'prop-types';
import Countdown from 'react-countdown';

const Timer = ({
  autoStart,
  time,
  start,
  onTick
}) => {
  const CountdownRef = createRef();

  const startTimer = () => {
    CountdownRef.current.api.start();
  };

  const pauseTimer = () => {
    CountdownRef.current.api.pause();
  };

  useEffect(() => {
    if (start) {
      startTimer();
    } else {
      pauseTimer();
    }
  }, [start]);

  return (
    <div className="timer">
      <Countdown
        autoStart={autoStart}
        date={time}
        ref={CountdownRef}
        renderer={
          ({ minutes: minutesArg, seconds }) => (
            <div>
              <div>{minutesArg}</div>
              <div>{String(seconds).length < 2 ? `0${seconds}` : seconds}</div>
            </div>
          )
        }
        onTick={onTick}
      />
    </div>
  );
};

Timer.propTypes = {
  autoStart: bool,
  start: bool,
  time: func,
  onTick: func,
};

Timer.defaultProps = {
  autoStart: false,
  start: false,
  time: (f) => f,
  onTick: (f) => f,
};

export default Timer;
