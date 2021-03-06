import React from 'react';
import { number, string } from 'prop-types';

const AddIcon = ({ width, height, fill }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill={fill}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </svg>
);

AddIcon.defaultProps = {
  width: 16,
  height: 16,
  fill: '#402E5A',
};

AddIcon.propTypes = {
  width: number,
  height: number,
  fill: string,
};

export default AddIcon;
