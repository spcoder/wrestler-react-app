import React from 'react';
import Field from '../Form/Field';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PageHeader from '../Page/PageHeader';
import FormActions from '../Form/FormActions';
import BaseError from '../Error/BaseError';
import PageContainer from '../Page/PageContainer';
import Form from './Form';
import SubmitButton from './SubmitButton';

class FormComponent extends React.Component {

  render() {
    return (
      <PageContainer slim>
        <PageHeader title={this.props.title}/>
        <BaseError errors={this.props.errors} />
        <Form onSubmit={this.props.onSubmit}>
          <Field label={'First Name'} type={'text'} name={'firstName'} error={this.props.errors.firstName} onChange={this.props.onChange} value={this.props.fields.firstName} autoFocus={true}/>
          <FormActions>
            <SubmitButton title={'Login'}/>
            <Link className={'button -link'} to={'/'}>Nevermind</Link>
          </FormActions>
        </Form>
      </PageContainer>
    );
  }

}

FormComponent.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.shape({
    firstName: PropTypes.string,
  }),
  errors: PropTypes.objectOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormComponent;
