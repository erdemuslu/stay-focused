import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, number, shape } from 'prop-types';

const ProjectDetails = ({ projects, selectedIndex }) => {
  if (!projects || !projects[selectedIndex]) return null;

  return (
    <div className="project-details">
      Project Details
    </div>
  );
};

ProjectDetails.defaultProps = {
  projects: [],
  selectedIndex: 0,
};

ProjectDetails.propTypes = {
  projects: arrayOf(shape({})),
  selectedIndex: number,
};

const mapStateToProps = ({ projects, selectedIndex }) => ({
  projects,
  selectedIndex,
});

export default connect(mapStateToProps)(ProjectDetails);
