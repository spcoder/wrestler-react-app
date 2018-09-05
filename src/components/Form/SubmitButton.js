import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = () => {
  return <button type={'submit'}>{props.title}</button>;
};

SubmitButton.propTypes = {
  title: PropTypes.string.isRequired,
};


export default SubmitButton;
