import React, { createContext, useReducer } from 'react';
import { node } from 'prop-types';

import mainReducer from '../reducer';
import payload from './payload';

const initialPayload = { ...payload };

// create context
export const MainContext = createContext(initialPayload);

// create Store
function Store({ children }) {
  const [state, dispatch] = useReducer(mainReducer, initialPayload);
  const value = { state, dispatch };

  return (
    <MainContext.Provider value={value}>
      { children }
    </MainContext.Provider>
  );
}

Store.defaultProps = {
  children: null,
};

Store.propTypes = {
  children: node,
};

export default Store;
