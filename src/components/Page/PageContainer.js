import React from 'react';
import PropTypes from 'prop-types';
import './PageContainer.css';

const PageContainer = props => {
  return (
    <div className={`page-container ${props.slim ? '-slim' : null}`}>
      {props.children}
    </div>
  );
};

PageContainer.propTypes = {
  slim: PropTypes.bool
};

export default PageContainer;
