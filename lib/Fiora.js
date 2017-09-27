import React from 'react';
import PropTypes from 'prop-types';
import { storeShape } from 'react-redux/lib/utils/PropTypes';
import { createForm, setErrors } from './actions';
import { getFormValues } from './selectors';
import { isEmpty } from './utils/helpers';

class Fiora extends React.Component {
  static contextTypes = {
    store: storeShape
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    validate: PropTypes.func,
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired
  };

  static defaultProps = {
    validate: async () => true
  };

  static childContextTypes = {
    fiora: PropTypes.object
  };

  constructor(props, context) {
    super(props);

    const { dispatch } = context.store;
    dispatch(createForm(this.props.name));
  }

  getChildContext() {
    return { fiora: { formName: this.props.name } };
  }

  handleErrors = result => {
    const { name } = this.props;
    const { dispatch } = this.context.store;

    if (!isEmpty(result.errors)) {
      dispatch(setErrors(name, result.errors));
      return false;
    }
    return true;
  };

  handleSubmit = async () => {
    const { validate, onSubmit, name } = this.props;
    const { getState } = this.context.store;
    // TODO check here
    const formValues = getFormValues(getState(), { formName: name });
    const validateResult = await validate(formValues);
    if (this.handleErrors(validateResult)) {
      const submitResult = await onSubmit(formValues);
      this.handleErrors(submitResult);
    }
  };

  render() {
    console.log('render Fiora');
    const { children } = this.props;
    return children({ handleSubmit: this.handleSubmit });
  }
}

export default Fiora;
