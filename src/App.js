import React from 'react';

import Store from './store';

import Side from './components/Side';
import TaskView from './components/TaskView';

const App = () => (
  <Store>
    <div className="app is-default" role="main">
      <Side />
      <TaskView />
    </div>
  </Store>
);

export default App;
