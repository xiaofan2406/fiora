/* @flow */
import * as React from 'react';
import {
  getValues,
  getInitialValues,
  fieldUpdater,
  getFieldValue,
} from './helpers';

export default (formName: string, Provider: ContextProvider) =>
  class Form extends React.Component<FormProps, FormState> {
    // // keep tracks of what fields are mounted in the Form
    fieldsInfo = {};

    updateField = (fieldName: string, value: mixed) => {
      // always is isTouched to true when value changes
      this.setState(fieldUpdater(fieldName, { value }));
    };

    /**
     * This function is here because React batches setState in event handlers.
     * In order for handleValidate to work in the same event handler
     * where handleChange is called, need to use the functional setState here.
     */
    validateField = (fieldName: string, onValidate: FieldOnValidate) => {
      this.setState(prevState => {
        const fieldValue = getFieldValue(fieldName, prevState);
        const result = onValidate(fieldValue);

        // async field onValid
        if (result instanceof Promise) {
          result
            .then(error => {
              this.setState(fieldUpdater(fieldName, { error }));
            })
            .catch(error => {
              // TODO what to do when the function itsefl throws error
              this.setState(fieldUpdater(fieldName, { error: error.message }));
            });
          return null;
        }

        return fieldUpdater(fieldName, { error: result })(prevState);
      });
    };

    registerField = (fieldName: string, info: {}) => {
      if (!this.fieldsInfo[fieldName]) {
        this.fieldsInfo[fieldName] = info;
      }
    };

    updateErrors = (errors: KeyedObject) => {
      let hasErrors = false;

      Object.keys(errors).forEach(name => {
        hasErrors = hasErrors || !!errors[name];

        this.setState(fieldUpdater(name, { error: errors[name] }));
      });

      return hasErrors;
    };

    handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { onSubmit, onValidate } = this.props;
      const { fields } = this.state;

      // If there is any exisitng errors in state, terminate
      const hasExisitngErrors = Object.keys(fields).some(
        fieldName => fields[fieldName].error
      );
      if (hasExisitngErrors) {
        return false;
      }

      // run each field validation, if there is any errors, terminate
      const fieldErrors = await Promise.all(
        Object.keys(this.fieldsInfo).map(fieldName =>
          this.fieldsInfo[fieldName].onValidate(
            getFieldValue(fieldName, this.state)
          )
        )
      );
      const errors = Object.keys(this.fieldsInfo).reduce(
        (reduced, fieldName, index) => ({
          ...reduced,
          [fieldName]: fieldErrors[index],
        }),
        {}
      );
      const hasFieldErrors = this.updateErrors(errors);

      if (hasFieldErrors) {
        return false;
      }

      // run the form's onValidate
      const formData = getValues(fields);
      if (onValidate) {
        const formErrors = await onValidate(formData);
        const hasFormErrors = this.updateErrors(formErrors || {});

        if (hasFormErrors) {
          return false;
        }
      }

      const submitErrors = await onSubmit(formData);
      const hasSubmitErrors = this.updateErrors(submitErrors || {});

      return hasSubmitErrors;
    };

    state = {
      fields: getInitialValues(this.props.initialValues),
      updateField: this.updateField,
      registerField: this.registerField,
      validateField: this.validateField,
    };

    render() {
      console.log('[Form]: render');
      const {
        children,
        onSubmit,
        onValidate,
        initialValues,
        ...rest
      } = this.props;
      return (
        <Provider value={this.state}>
          <form {...rest} name={formName} onSubmit={this.handleSubmit}>
            {children}
          </form>
        </Provider>
      );
    }
  };
