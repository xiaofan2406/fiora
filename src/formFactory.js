/* @flow */
import * as React from 'react';
import { getFormValues, getFieldValue, getInitialValues } from './helpers';

export type FormState = {
  error: $PropertyType<FormMetaRenderProps, 'error'>,
  isValidating: $PropertyType<FormMetaRenderProps, 'isValidating'>,
  isSubmitting: $PropertyType<FormMetaRenderProps, 'isSubmitting'>,
  fields: { [string]: InternalFieldState },
  registerField: (fieldName: string, info: {}) => void,
  updateValue: (fieldName: string, value: any) => void,
  validateField: (fieldName: string) => void,
};

export default (Provider: ContextProvider) =>
  class Form extends React.Component<FormProps, FormState> {
    // Keep tracks of what fields are mounted in the Form.
    // This is the source of truth for field names that belongs to the form.
    // At the moment, only contains `validator` function.
    fieldsInfo = {};

    /**
     * Register the mounted field in the Form.
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
    updateValue = (fieldName: string, value: any) => {
      this.setState(
        prevState =>
          !prevState.fields[fieldName] ||
          prevState.fields[fieldName].value !== value
            ? {
                fields: {
                  ...prevState.fields,
                  [fieldName]: {
                    ...prevState.fields[fieldName],
                    value,
                    // Clear field error whenever value changes
                    error: null,
                    isTouched: true,
                  },
                },
              }
            : null
      );
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
            this.setState(
              nextState =>
                error &&
                (!nextState.fields[fieldName] ||
                  nextState.fields[fieldName].error !== error)
                  ? {
                      fields: {
                        ...nextState.fields,
                        [fieldName]: {
                          ...nextState.fields[fieldName],
                          error,
                          isTouched: true,
                        },
                      },
                    }
                  : null
            );
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

      let partial = {
        fields: this.state.fields,
        isSubmitting: false,
        isValidating: false,
      };

      Object.keys(errorObj)
        .filter(name => !!errorObj[name])
        .forEach(name => {
          if (name === 'form' && this.state.error !== errorObj[name]) {
            hasErrors = true;
            partial = {
              ...partial,
              error: errorObj[name],
            };
          }
          if (
            name !== 'form' &&
            (!this.state.fields[name] ||
              this.state.fields[name].error !== errorObj[name])
          ) {
            hasErrors = true;
            partial = {
              ...partial,
              fields: {
                ...partial.fields,
                [name]: {
                  ...this.state.fields[name],
                  error: errorObj[name],
                  isTouched: true,
                },
              },
            };
          }
        });

      if (hasErrors) {
        this.setState(partial);
      }

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

      this.setState({ isSubmitting: true, isValidating: true });

      // Check if there is any error currently.
      const hasExistingErrors = Object.keys(fields).some(
        fieldName => fields[fieldName].error
      );
      if (hasExistingErrors) {
        this.setState({ isSubmitting: false, isValidating: false });
        return false;
      }

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
      } else {
        this.setState({ isValidating: false });
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
      error: null,
      isValidating: false,
      isSubmitting: false,
      fields: getInitialValues(this.props.initialValues),
      updateValue: this.updateValue,
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
      console.log('Form');
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
