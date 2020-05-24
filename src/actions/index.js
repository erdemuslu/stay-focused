import {
  ADD_TASK,
  SET_TIMER_STYLE,
  SET_START,
  UPDATE_TASK_STATUS,
  UPDATE_SESSIONS,
  RESET_TIMER_STATISTICS,
} from './types';

export const setStart = (start) => ({ type: SET_START, start });
export const setTimerStyle = (style) => ({ type: SET_TIMER_STYLE, style });
export const addTask = (params) => ({ type: ADD_TASK, params });
export const updateTaskStatus = (index, checked) => (
  { type: UPDATE_TASK_STATUS, payload: { index, checked } }
);
export const updateSessions = () => ({ type: UPDATE_SESSIONS });
export const resetTimerStatistics = () => ({ type: RESET_TIMER_STATISTICS });
