import React from 'react';
import PropTypes from 'prop-types';

const Form = props => {
  return (
    <form onSubmit={this.props.onSubmit}>
      {props.children}
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
