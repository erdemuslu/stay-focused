import React from 'react';

import ProgressBar from '../ProgressBar';
import Timer from '../Timer';

const Side = () => (
  <div className="side">
    <div className="side-header">
      <h1>StayFocused</h1>
    </div>
    <div className="side-content">
      <div className="side-progress">
        <ProgressBar />
        <Timer />
      </div>
    </div>
  </div>
);

export default Side;
