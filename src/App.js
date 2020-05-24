import React, { useEffect } from 'react';

import Store from './store';

import Side from './components/Side';

const App = () => {
  useEffect(() => { console.log('mounted'); }, []);

  return (
    <Store>
      <div className="app is-default" role="main">
        <Side />
      </div>
    </Store>
  );
};

export default App;
