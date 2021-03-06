import React, { memo, createRef, useEffect } from 'react';
import { bool, func, number } from 'prop-types';
import Countdown from 'react-countdown';

const Timer = ({
  autoStart,
  time,
  start,
  onTick,
  countdownKey,
  onComplete,
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
        key={countdownKey}
        autoStart={autoStart}
        date={time}
        ref={CountdownRef}
        renderer={
          ({ minutes: minutesArg, seconds }) => (
            <div>
              <div>{String(minutesArg).length < 2 ? `0${minutesArg}` : minutesArg}</div>
              <div>{String(seconds).length < 2 ? `0${seconds}` : seconds}</div>
            </div>
          )
        }
        onComplete={onComplete}
        onTick={onTick}
      />
    </div>
  );
};

Timer.propTypes = {
  autoStart: bool,
  start: bool,
  time: number,
  onTick: func,
  onComplete: func,
  countdownKey: number,
};

Timer.defaultProps = {
  autoStart: false,
  start: false,
  time: new Date(),
  onTick: (f) => f,
  onComplete: (f) => f,
  countdownKey: 0,
};

const areEqual = (prevProps, nextProps) => {
  if (
    prevProps.countdownKey === nextProps.countdownKey
    && prevProps.start === nextProps.start
  ) {
    return true;
  }

  return false;
};

export default memo(Timer, areEqual);
