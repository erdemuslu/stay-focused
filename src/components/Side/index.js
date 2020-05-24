import React, { useContext, useState, useEffect } from 'react';

import { MainContext } from '../../store';
import { setStart } from '../../actions';

import Selection from '../Selection';
import Timer from '../Timer';

const Side = () => {
  const { state, dispatch } = useContext(MainContext);
  const [countdownKey, setCountdownKey] = useState(0);
  const [time, setTime] = useState(Date.now() + (60 * 25 * 1000));

  const handleTimer = () => {
    dispatch(setStart(!state.timer.start));
  };

  useEffect(() => {
    setTime(Date.now() + (60 * state.timer.minutes * 1000));
    setCountdownKey((prevState) => prevState + 1);
  }, [state.timer.minutes]);

  useEffect(() => {
    if (state.timer.start) {
      handleTimer();
    }
  }, [countdownKey]);

  return (
    <div
      className={`side is-${state.timer.style}`}
    >
      <div className="side-header">
        <h1>StayFocused</h1>
        <Selection />
      </div>
      <div className="side-content">
        <div className="side-progress">
          <Timer
            countdownKey={countdownKey}
            autoStart={false}
            start={state.timer.start}
            time={time}
          />
        </div>
      </div>
      <div className="side-cta">
        <button
          type="button"
          className="btn"
          onClick={handleTimer}
        >
          {state.timer.start ? 'Pause' : 'Start'}
        </button>
      </div>
    </div>
  );
};

export default Side;
