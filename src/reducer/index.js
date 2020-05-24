/* eslint-disable no-case-declarations */
import {
  ADD_TASK,
  SET_TIMER_STYLE,
  SET_START,
  UPDATE_TASK_STATUS,
  UPDATE_SESSIONS,
  RESET_TIMER_STATISTICS,
} from '../actions/types';

function mainReducer(state, action) {
  switch (action.type) {
    case ADD_TASK:
      const { title, isDone } = action.params;

      const newItem = [
        {
          title,
          isDone,
        },
      ];

      return {
        ...state,
        tasks: {
          ...state.tasks,
          list: [
            ...state.tasks.list,
            ...newItem,
          ],
        },
      };
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
    case UPDATE_TASK_STATUS:
      const newArr = state.tasks.list.map((item, itemIndex) => {
        const nItem = item;

        if (action.payload.index === itemIndex) {
          nItem.isDone = action.payload.checked;
        }

        return nItem;
      });
      return {
        ...state,
        tasks: {
          ...state.tasks,
          list: newArr,
        },
      };
    case UPDATE_SESSIONS:
      return {
        ...state,
        timer: {
          ...state.timer,
          sessions: state.timer.sessions + 1,
        },
      };
    case RESET_TIMER_STATISTICS:
      return {
        ...state,
        timer: {
          ...state.timer,
          sessions: 0,
        },
        tasks: {
          ...state.tasks,
          list: state.tasks.list.map((item) => {
            const nItem = item;
            nItem.isDone = false;
            return nItem;
          }),
        },
      };
    default:
      return state;
  }
}

export default mainReducer;
