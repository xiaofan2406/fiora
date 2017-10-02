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
    onValidate: async () => ({})
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

  handleErrorsIfAny = (errors = {}) => {
    const { name } = this.props;
    const { dispatch } = this.context.store;
    const errorFields = Object.keys(errors);
    errorFields.map(fieldName =>
      dispatch(updateError(name, fieldName, errors[fieldName]))
    );

    // return true if there is error
    return errorFields.some(fieldName => errors[fieldName]);
  };

  // These run* functions can be refactored into actions uses redux-thunks
  // However, they are written in these way to avoid the dependency
  runFormValidation = async values => {
    // const { dispatch } = this.context.store;
    // dispatch(startValidatingForm(formName))
    let result = await this.props.onValidate(values);
    // dispatch(finishValidatingForm(formName))
    result = result || {};
    if (!result[FORM_AS_FIELD_NAME]) {
      result[FORM_AS_FIELD_NAME] = DEFAULT_ERROR;
    }
    return result;
  };

  runFieldValidation = async (fieldName, value) => {
    // const { dispatch } = this.context.store;
    // dispatch(startValidatingField(fieldName))
    const result = await this.fieldValidations[fieldName](value);
    // dispatch(finishValidatingField(fieldName))
    return result || DEFAULT_ERROR;
  };

  runValidations = async formValues => {
    const fields = Object.keys(formValues);
    const [formErrors, ...fieldErrors] = await Promise.all([
      this.runFormValidation(formValues),
      ...fields.map(fieldName =>
        this.runFieldValidation(fieldName, formValues[fieldName])
      )
    ]);

    const errors = {};
    [...fields, FORM_AS_FIELD_NAME].forEach((fieldName, index) => {
      if (Object.prototype.hasOwnProperty.call(formErrors, fieldName)) {
        errors[fieldName] = formErrors[fieldName];
      } else {
        errors[fieldName] = fieldErrors[index];
      }
    });
    return errors;
  };

  runSumbit = async (errors, formValues) => {
    const { onSubmit } = this.props;
    if (!this.handleErrorsIfAny(errors)) {
      const submitErrors = await onSubmit(formValues);
      this.handleErrorsIfAny(submitErrors);
    }
  };

  handleSubmit = async () => {
    const { name } = this.props;
    const { getState } = this.context.store;
    const formValues = getFormValues(getState(), { formName: name });

    const errors = await this.runValidations(formValues);
    await this.runSubmit(errors, formValues);
  };

  render() {
    return this.props.children({ handleSubmit: this.handleSubmit });
  }
}

export default Fiora;
