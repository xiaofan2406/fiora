import React from 'react';
import PropTypes from 'prop-types';
import { storeShape } from 'react-redux/lib/utils/PropTypes';
import {
  createForm,
  startValidatingField,
  finishValidatingField,
  updateError
} from './actions';
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

  // NOTE Consider include redux-thunks as a dep to refactor these run* funcs?
  runFieldValidation = async (fieldName, value) => {
    const { dispatch } = this.context.store;
    const { name } = this.props;
    dispatch(startValidatingField(name, fieldName));
    const result = await this.fieldValidations[fieldName](value);
    dispatch(finishValidatingField(name, fieldName));
    return result;
  };

  runValidations = async formValues => {
    // const { name } = this.props;
    const fields = Object.keys(formValues);
    // dispatch(startValidatingForm(name))
    const [formErrors, ...fieldErrors] = await Promise.all([
      this.props.onValidate(formValues),
      ...fields.map(fieldName =>
        this.runFieldValidation(fieldName, formValues[fieldName])
      )
    ]);
    // dispatch(finishValidatingForm(name))
    console.log('formErrors', formErrors);
    console.log('fieldErrors', fieldErrors);

    const errors = {};
    [...fields, FORM_AS_FIELD_NAME].forEach((fieldName, index) => {
      // error returned from Fiora.onValidate overwrites Field.onValidate
      // also reset all errors if no errors
      if (Object.prototype.hasOwnProperty.call(formErrors, fieldName)) {
        errors[fieldName] = formErrors[fieldName] || DEFAULT_ERROR;
      } else {
        errors[fieldName] = fieldErrors[index] || DEFAULT_ERROR;
      }
    });

    console.log(errors);

    return errors;
  };

  handleSubmit = async () => {
    const { name, onSubmit } = this.props;
    const { getState } = this.context.store;
    const formValues = getFormValues(getState(), { formName: name });
    const errors = await this.runValidations(formValues);
    if (!this.handleErrorsIfAny(errors)) {
      // dispatch(startSubmitting(name))
      const submitErrors = await onSubmit(formValues);
      // dispatch(finishSubmitting(name))
      this.handleErrorsIfAny(submitErrors);
    }
  };

  render() {
    return this.props.children;
  }
}

export default Fiora;
