import { ADD_PROJECT, SET_ACTIVE_PROJECT } from './types';

export const addProject = (payload) => ({
  type: ADD_PROJECT,
  payload,
});

export const setActiveProject = (payload) => ({
  type: SET_ACTIVE_PROJECT,
  payload,
});
