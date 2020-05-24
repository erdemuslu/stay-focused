import React, { useContext } from 'react';

import { MainContext } from '../../store';
import { setTimerStyle } from '../../actions';

const Selection = () => {
  const { state, dispatch } = useContext(MainContext);

  const handleSelection = (val) => {
    dispatch(setTimerStyle(val));
  };

  return (
    <div className="selection">
      <button
        type="button"
        className={`selection-item${state.timer.style === 'pomodoro' ? ' is-selected' : ''}`}
        onClick={handleSelection.bind(this, 'pomodoro')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 512 640"
          enableBackground="new 0 0 512 512"
          xmlSpace="preserve"
        >
          <path
            d="M512,256C512,114.625,397.375,0,256,0S0,114.625,0,256s114.625,256,256,256S512,397.375,512,256z M32,256  C32,132.469,132.5,32,256,32s224,100.469,224,224c0,123.5-100.5,224-224,224S32,379.5,32,256z M256,256V64  c106.031,0,192,85.969,192,192H256z M125.438,162.125l-16,27.719l-27.719-16l16-27.719L125.438,162.125z M386.563,349.844l16-27.688  l27.719,16l-16,27.688L386.563,349.844z M189.844,109.438l-27.719,16l-16-27.719l27.719-16L189.844,109.438z M322.125,402.563  l27.719-16l16,27.719l-27.688,16L322.125,402.563z M272,416v32l-32,0.031V416H272z M189.844,402.563l-16,27.719l-27.719-15.969  l16.031-27.75L189.844,402.563z M125.438,349.844l-27.719,16.031l-16.031-27.688l27.75-16.031L125.438,349.844z M96,272l-32,0.031  l-0.063-32H96V272z"
          />
        </svg>
      </button>
      <button
        type="button"
        className={`selection-item${state.timer.style === 'break' ? ' is-selected' : ''}`}
        onClick={handleSelection.bind(this, 'break')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30" x="0px" y="0px">
          <path d="M19,19H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" />
          <path
            d="M18,8.0645V7a1,1,0,0,0-1-1H7A1,1,0,0,0,6,7v8a3.0033,3.0033,0,0,0,3,3h6a2.995,2.995,0,0,0,2.8157-2H18a3.0033,3.0033,0,0,0,3-3V11.0645A3.0033,3.0033,0,0,0,18,8.0645ZM15,16H9a1.0013,1.0013,0,0,1-1-1V8h8v7A1.0009,1.0009,0,0,1,15,16Zm4-3a1.0009,1.0009,0,0,1-1,1V10.0645a1.0009,1.0009,0,0,1,1,1Z"
          />
          <path
            d="M14.0771,4.5005l.5782-1A1,1,0,0,0,12.9233,2.5l-.5781,1A1,1,0,0,0,14.0771,4.5005Z"
          />
          <path
            d="M11.0776,4.5l.5772-1a1,1,0,0,0-1.7324-1l-.5772,1A1,1,0,0,0,11.0776,4.5Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Selection;
