import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Field.css';

class Field extends Component {

  render() {
    return (
      <div className={'form-field'}>
        <label>{this.props.label}</label>
        {this.props.type === 'textarea' ? (
          <textarea {...this.props} name={this.props.name} onChange={this.props.onChange} value={this.props.value || ''} autoFocus={this.props.autoFocus}/>
        ) : (
          <input {...this.props} type={this.props.type} name={this.props.name} onChange={this.props.onChange} value={this.props.value || ''} autoFocus={this.props.autoFocus}/>
        )}
        <small className={this.props.error ? 'danger' : ''}>{this.props.tip || this.props.error}</small>
      </div>
    );
  }

}

Field.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'textarea']).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tip: PropTypes.string,
  error: PropTypes.string,
  autoFocus: PropTypes.bool,
};

export default Field;
