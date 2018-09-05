import withForm from '../../hocs/withForm';

const title = (props) => {
  // return 'New Widget';
};

const fields = (props) => {
  // return { name: null, color: null };
};

const validate = (fields) => {
  // return { firstName: 'This field is required' };
};

const submit = (props, fields) => {
  // return API.post('/widgets', fields);
};

const successPath = (props) => {
  // return '/projects';
};

export default withForm(FormComponent, title, fields, validate, submit, successPath);
