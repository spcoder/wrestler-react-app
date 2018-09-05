import React from 'react';
import './FormActions.css';

const FormActions = props => {
  return (
    <div className={'form-actions'}>
      {props.children}
    </div>
  );
};

export default FormActions;
