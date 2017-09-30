import React from 'react';
import PropTypes from 'prop-types';
import { storeShape } from 'react-redux/lib/utils/PropTypes';
import { createForm, updateError } from './actions';
import { getFormValues } from './selectors';
import { FORM_AS_FIELD_NAME, DEFAULT_ERROR } from './helpers';

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
    onValidate: async () => {}
  };

  static childContextTypes = {
    fiora: PropTypes.object
  };

  getChildContext() {
    return {
      fiora: {
        formName: this.props.name,
        setValidateFunc: this.setValidateFunc
      }
    };
  }

  componentWillMount() {
    const { dispatch } = this.context.store;
    dispatch(createForm(this.props.name));
  }

  setValidateFunc = (fieldName, validateFunc) => {
    this.fieldValidations[fieldName] = validateFunc;
  };

  fieldValidations = {};

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
    const fields = Object.keys(formValues);
    const [formErrors, ...fieldErrors] = await Promise.all([
      onValidate(formValues),
      ...fields.map(fieldName =>
        this.fieldValidations[fieldName](formValues[fieldName])
      )
    ]);
    let validationErrors = {};
    fields.forEach((fieldName, index) => {
      validationErrors[fieldName] = fieldErrors[index];
    });
    if (!formErrors[FORM_AS_FIELD_NAME]) {
      formErrors[FORM_AS_FIELD_NAME] = DEFAULT_ERROR;
    }
    validationErrors = { ...validationErrors, ...formErrors };
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
