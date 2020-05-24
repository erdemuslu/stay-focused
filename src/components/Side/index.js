import React, { useContext, useState, useEffect } from 'react';

import Logo from '../../assets/images/logo.png';

import { MainContext } from '../../store';
import { setStart, updateSessions, setTimerStyle } from '../../actions';

import Selection from '../Selection';
import Timer from '../Timer';

import GithubLogo from '../../assets/images/github-logo.svg';

const Side = () => {
  const { state, dispatch } = useContext(MainContext);
  const [countdownKey, setCountdownKey] = useState(0);
  const [time, setTime] = useState(Date.now() + (60 * 25 * 1000));

  const handleTimer = () => {
    dispatch(setStart(!state.timer.start));
  };

  const onComplete = () => {
    dispatch(setTimerStyle(state.timer.style === 'pomodoro' ? 'break' : 'pomodoro'));
  };

  useEffect(() => {
    setTime(Date.now() + (60 * state.timer.minutes * 1000));
    setCountdownKey((prevState) => prevState + 1);
  }, [state.timer.minutes]);

  useEffect(() => {
    if (state.timer.start) {
      handleTimer();
    }

    if (
      state.timer.minutes === 5
      && countdownKey > 1
    ) {
      dispatch(updateSessions());
    }
  }, [countdownKey]);

  return (
    <div
      className={`side is-${state.timer.style}`}
    >
      <div className="side-header">
        <h1>
          <img alt="logo" src={Logo} />
        </h1>
        <Selection />
        <a href="https://github.com/erdemuslu/stay-focused">
          <img alt="github-logo" src={GithubLogo} />
        </a>
      </div>
      <div className="side-content">
        <div className="side-progress">
          <Timer
            countdownKey={countdownKey}
            autoStart={false}
            start={state.timer.start}
            time={time}
            onComplete={onComplete}
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
