import {
  ADD_TASK,
  SET_TIMER_STYLE,
  SET_START,
} from './types';

export const setStart = (start) => ({ type: SET_START, start });
export const setTimerStyle = (style) => ({ type: SET_TIMER_STYLE, style });
export const addTask = (params) => ({ type: ADD_TASK, params });
