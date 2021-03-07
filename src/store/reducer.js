const INITIAL_STATE = {
  projects: [],
};

function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case 'add':
      return {
        ...state,
        projects: [
          ...state.projects,
          payload,
        ],
      };
    default:
      return state;
  }
}

export default reducer;
