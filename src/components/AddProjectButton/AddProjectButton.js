import React from 'react';
import { func } from 'prop-types';
import { AddIcon } from '../Icons';

const AddProjectButton = ({ onClick }) => (
  <button
    type="button"
    className="project-button add-project-button"
    onClick={onClick}
  >
    <AddIcon width={32} height={32} />
    <span>New project</span>
  </button>
);

AddProjectButton.defaultProps = {
  onClick: () => null,
};

AddProjectButton.propTypes = {
  onClick: func,
};

export default AddProjectButton;
