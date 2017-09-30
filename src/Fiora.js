import React from 'react';
import PropTypes from 'prop-types';
import { storeShape } from 'react-redux/lib/utils/PropTypes';
import { createForm, updateError } from './actions';
import { getFormValues } from './selectors';

class Fiora extends React.Component {
  static contextTypes = {
    store: storeShape
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    onValidate: PropTypes.func,
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired
  };

  static defaultProps = {
    onValidate: async () => true
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

  // return true if there is error
  handleErrorsIfAny = errors => {
    const { name } = this.props;
    const { dispatch } = this.context.store;

    const errorFields = Object.keys(errors);
    if (errorFields.length > 0) {
      // TODO consider falsy value
      errorFields.map(fieldName =>
        dispatch(updateError(name, fieldName, errors[fieldName]))
      );
      return true;
    }
    return false;
  };

  handleSubmit = async () => {
    const { onValidate, onSubmit, name } = this.props;
    const { getState } = this.context.store;

    const formValues = getFormValues(getState(), { formName: name });
    const validationErrors = await onValidate(formValues);
    if (!this.handleErrorsIfAny(validationErrors)) {
      const submitErrors = await onSubmit(formValues);
      this.handleErrorsIfAny(submitErrors);
    }
  };

  render() {
    return this.props.children({ handleSubmit: this.handleSubmit });
  }
}

export default Fiora;
