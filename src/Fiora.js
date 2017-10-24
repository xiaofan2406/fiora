import React from 'react';
import PropTypes from 'prop-types';
import { storeShape } from 'react-redux/lib/utils/PropTypes';
import {
  createForm,
  updateFormError,
  startValidatingForm,
  finishValidatingForm,
  startSubmitting,
  finishSubmitting,
  updateFieldError,
  startValidatingField,
  finishValidatingField
} from './actions';
import { getFormValues } from './selectors';
import { zip, FORM_AS_FIELD_NAME, DEFAULT_ERROR } from './helpers';

class Fiora extends React.Component {
  static contextTypes = {
    store: storeShape
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    onValidate: PropTypes.func,
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    onValidate: async () => null
  };

  static childContextTypes = {
    fiora: PropTypes.object
  };

  getChildContext() {
    return {
      fiora: {
        formName: this.props.name,
        setValidateFunc: this.setValidateFunc,
        handleSubmit: this.handleSubmit
      }
    };
  }

  componentWillMount() {
    this.context.store.dispatch(createForm(this.props.name));
  }

  setValidateFunc = (fieldName, validateFunc) => {
    this.fieldValidations[fieldName] = this.makeHandleFieldValidate(
      fieldName,
      validateFunc
    );
  };

  fieldValidations = {};

  makeHandleFieldValidate = (fieldName, fieldValidationFunc) => async value => {
    const { name: formName } = this.props;
    const { dispatch } = this.context.store;

    dispatch(startValidatingField(formName, fieldName));
    const error = await fieldValidationFunc(value);
    dispatch(finishValidatingField(formName, fieldName));

    return error;
  };

  // return true if there is error
  // error can be undefined due to onSubmit may return nothing
  // This function also sets/clears form error
  handleErrorsIfAny = (errors = {}, fields) => {
    const { name: formName } = this.props;
    const { dispatch } = this.context.store;

    fields.map(fieldName =>
      dispatch(
        updateFieldError(
          formName,
          fieldName,
          errors[fieldName] || DEFAULT_ERROR
        )
      )
    );
    if (Object.hasOwnProperty.call(errors, FORM_AS_FIELD_NAME)) {
      dispatch(
        updateFormError(formName, errors[FORM_AS_FIELD_NAME] || DEFAULT_ERROR)
      );
    }

    return Object.values(errors).some(error => error);
  };

  // return true if there is error
  runValidations = async formValues => {
    const { onValidate } = this.props;
    const fields = Object.keys(formValues);

    // step 1: run each individual `onValidate` specified on each Field
    // if any error found, terminate and return true
    const fieldErrorsArray = await Promise.all(
      fields.map(fieldName =>
        this.fieldValidations[fieldName](formValues[fieldName])
      )
    );
    const fieldErrors = zip(fields, fieldErrorsArray);
    if (fields.some(fieldName => fieldErrors[fieldName])) {
      return this.handleErrorsIfAny(fieldErrors, fields);
    }

    // step 2: run `onValidate` specified on the Fiora form
    const errors = await onValidate(formValues);
    return this.handleErrorsIfAny(errors, fields);
  };

  handleSubmit = async () => {
    const { name: formName, onSubmit } = this.props;
    const { getState, dispatch } = this.context.store;

    const formValues = getFormValues(getState(), { formName });
    dispatch(startValidatingForm(formName));
    const hasError = await this.runValidations(formValues);
    dispatch(finishValidatingForm(formName));

    if (!hasError) {
      dispatch(startSubmitting(formName));
      const submitErrors = await onSubmit(formValues);
      dispatch(finishSubmitting(formName));

      this.handleErrorsIfAny(submitErrors, Object.keys(formValues));
    }
  };

  render() {
    return this.props.children;
  }
}

export default Fiora;
