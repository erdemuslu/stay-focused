import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { addProject } from '../../store/actions';
import AddProjectButton from '../AddProjectButton';

const Projects = ({ addProjectFunc }) => (
  <div className="projects">
    <AddProjectButton onClick={addProjectFunc} />
    Test
  </div>
);

Projects.defaultProps = {
  addProjectFunc: () => null,
};

Projects.propTypes = {
  addProjectFunc: func,
};

const mapDispatchToProps = {
  addProjectFunc: addProject,
};

export default connect(null, mapDispatchToProps)(Projects);
