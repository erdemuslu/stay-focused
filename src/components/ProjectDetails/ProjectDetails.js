import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, number, shape } from 'prop-types';

const ProjectDetails = ({ projects, selected }) => {
  if (!projects || !projects[selected]) return null;

  return (
    <div className="project-details">
      Project Details
    </div>
  );
};

ProjectDetails.defaultProps = {
  projects: [],
  selected: 0,
};

ProjectDetails.propTypes = {
  projects: arrayOf(shape({})),
  selected: number,
};

const mapStateToProps = ({ projects, selected }) => ({
  projects,
  selected,
});

export default connect(mapStateToProps)(ProjectDetails);
