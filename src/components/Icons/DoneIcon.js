import React from 'react';
import { number, string } from 'prop-types';

const DoneIcon = ({ width, height, fill }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill={fill}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </svg>
);

DoneIcon.defaultProps = {
  width: 16,
  height: 16,
  fill: '#402E5A',
};

DoneIcon.propTypes = {
  width: number,
  height: number,
  fill: string,
};

export default DoneIcon;
