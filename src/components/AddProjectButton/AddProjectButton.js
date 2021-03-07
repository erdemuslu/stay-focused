import React from 'react';
import { AddIcon } from '../Icons';

const AddProjectButton = () => (
  <button
    type="button"
    className="project-button add-project-button"
  >
    <AddIcon width={32} height={32} />
    <span>New project</span>
  </button>
);

export default AddProjectButton;
