import React from 'react';
import { number, bool } from 'prop-types';
import Countdown from 'react-countdown';

const Timer = ({
  autoStart,
  minutes,
}) => (
  <div className="timer">
    <Countdown
      autoStart={autoStart}
      date={Date.now() + (60 * minutes * 1000)}
    />
  </div>
);

Timer.propTypes = {
  autoStart: bool,
  minutes: number,
};

Timer.defaultProps = {
  autoStart: false,
  minutes: 25,
};

export default Timer;
