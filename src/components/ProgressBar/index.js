import React from 'react';
import { number } from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({ value, maxValue, strokeWidth }) => (
  <CircularProgressbar
    value={value}
    maxValue={maxValue}
    strokeWidth={strokeWidth}
    counterClockwise
  />
);

ProgressBar.propTypes = {
  value: number,
  maxValue: number,
  strokeWidth: number,
};

ProgressBar.defaultProps = {
  value: 100,
  maxValue: 100,
  strokeWidth: 3,
};

export default ProgressBar;
