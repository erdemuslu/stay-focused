import {
  SET_TIMER_STYLE,
  SET_START,
} from '../actions/types';

function mainReducer(state, action) {
  switch (action.type) {
    case SET_TIMER_STYLE:
      return {
        ...state,
        timer: {
          ...state.timer,
          style: action.style,
          minutes: action.style === 'pomodoro' ? 25 : 5,
        },
      };
    case SET_START:
      return {
        ...state,
        timer: {
          ...state.timer,
          start: action.start,
        },
      };
    default:
      return state;
  }
}

export default mainReducer;
