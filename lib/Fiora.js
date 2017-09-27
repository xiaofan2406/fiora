import React from 'react';
import PropTypes from 'prop-types';
import { storeShape } from 'react-redux/lib/utils/PropTypes';
import { createForm, updateError } from './actions';
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

  // return true if there is NO error
  handleErrorsIfAny = ({ errors }) => {
    const { name } = this.props;
    const { dispatch } = this.context.store;

    if (!isEmpty(errors)) {
      Object.keys(errors).map(fieldName =>
        dispatch(updateError(name, fieldName, errors[fieldName]))
      );
      return false;
    }
    return true;
  };

  handleSubmit = async () => {
    const { validate, onSubmit, name } = this.props;
    const { getState } = this.context.store;
    const formValues = getFormValues(getState(), { formName: name });

    const validateResult = await validate(formValues);

    if (this.handleErrorsIfAny(validateResult)) {
      const submitResult = await onSubmit(formValues);
      this.handleErrorsIfAny(submitResult);
    }
  };

  render() {
    console.log('render Fiora');
    const { children } = this.props;
    return children({ handleSubmit: this.handleSubmit });
  }
}

export default Fiora;
