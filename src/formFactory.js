/* @flow */
import * as React from 'react';
import {
  getFormValues,
  getFieldValue,
  getInitialValues,
  fieldUpdater,
} from './helpers';

export type FormState = {
  fields: { [string]: InternalFieldState },
  registerField: (fieldName: string, info: {}) => void,
  updateField: (fieldName: string, value: any) => void,
};

export default (Provider: ContextProvider) =>
  class Form extends React.Component<FormProps, FormState> {
    // Keep tracks of what fields are mounted in the Form.
    // This is the source of truth for field names that belongs to the form.
    // At the moment, only contains `validator` function.
    fieldsInfo = {};

    /**
     * Register the mounted field in the Form.     *
     * @param {string} fieldName The name of the field.
     * @param {Object} info The info to replace
     */
    registerField = (fieldName: string, info: {}) => {
      if (!this.fieldsInfo[fieldName]) {
        this.fieldsInfo[fieldName] = info;
      }
    };

    /**
     * Update the field to the given value in the Form.
     * @param {string} fieldName The name of the field.
     * @param {any} value The new value for the field.
     */
    updateField = (fieldName: string, value: any) => {
      this.setState(fieldUpdater(fieldName, { value }));
    };

    /**
     * Validate the given field using on the validator registered.
     *
     * This function is here because React batches setState in event handlers.
     * In order for handleValidate to work in the same event handler
     * where handleChange is called, need to use the functional setState here.
     * @param {string} fieldName The name of the field.
     */
    validateField = (fieldName: string) => {
      this.setState(prevState => {
        // Unable to use async/await in setState function
        // This promise always resolves
        this.fieldsInfo[fieldName]
          .validator(getFieldValue(fieldName, prevState))
          .then(error => {
            this.setState(fieldUpdater(fieldName, { error }));
          });

        // No immediate state change when validation is triggered
        return null;
      });
    };

    /**
     * A helper function to update errors to the state.
     * Any falsy value of the error will be ignored.
     * @param {Object} errors An object with key being the field name and value being the error.
     * @returns {boolean} Representing if there were any error set in the state.
     */
    _updateErrors = (errors: KeyedObject) => {
      let hasErrors = false;
      const errorObj = errors || {};

      Object.keys(errorObj)
        .filter(name => !this.fieldsInfo[name] || name !== 'form')
        .forEach(fieldName => {
          hasErrors = hasErrors || !!errorObj[fieldName];

          this.setState(
            fieldUpdater(fieldName, { error: errorObj[fieldName] })
          );
        });

      return hasErrors;
    };

    /**
     * Submit the form.
     *
     * It will proceed to do the following in the order:
     *    - Check if there is any error currently.
     *    - If there is any error then terminate else continue.
     *    - Run each field's validation.
     *    - If there is any error then terminate else continue.
     *    - Run the form's validation.
     *    - If there is any error then terminate else continue.
     *    - Run the form's submission.
     *    - If there is any error return false else return true.
     * @param {SyntheticEvent} event The onSubmit event of the HTML form.
     * @returns {boolean} Representing if there were any error.
     */
    handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { onSubmit, onValidate } = this.props;
      const { fields } = this.state;

      // Check if there is any error currently.
      const hasExistingErrors = Object.keys(fields).some(
        fieldName => fields[fieldName].error
      );
      if (hasExistingErrors) return false;

      // Run each field's validation.
      const fieldNames = Object.keys(this.fieldsInfo);
      const fieldErrors = await Promise.all(
        fieldNames.map(fieldName =>
          this.fieldsInfo[fieldName].validator(
            getFieldValue(fieldName, this.state)
          )
        )
      );
      const errors = fieldNames.reduce(
        (reduced, fieldName, index) => ({
          ...reduced,
          [fieldName]: fieldErrors[index],
        }),
        {}
      );
      const hasFieldErrors = this._updateErrors(errors);
      if (hasFieldErrors) return false;

      // Run the form's validation.
      const formData = getFormValues(fields);
      if (onValidate) {
        const formErrors = await onValidate(formData);
        const hasFormErrors = this._updateErrors(formErrors);

        if (hasFormErrors) return false;
      }

      // Run the form's submission.
      const submitErrors = await onSubmit(formData);
      const hasSubmitErrors = this._updateErrors(submitErrors);

      return hasSubmitErrors;
    };

    /**
     * Reset the form.
     * It will clear all fields' state.
     */
    handleReset = () => {
      const { initialValues, onReset } = this.props;

      this.setState({
        fields: getInitialValues(initialValues),
      });

      if (onReset) onReset();
    };

    state = {
      fields: getInitialValues(this.props.initialValues),
      updateField: this.updateField,
      registerField: this.registerField,
      validateField: this.validateField,
    };

    render() {
      const {
        children,
        onSubmit,
        onReset,
        onValidate,
        initialValues,
        ...rest
      } = this.props;

      return (
        <Provider value={this.state}>
          <form
            {...rest}
            onSubmit={this.handleSubmit}
            onReset={this.handleReset}
          >
            {children}
          </form>
        </Provider>
      );
    }
  };
