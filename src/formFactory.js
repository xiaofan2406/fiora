/* @flow */
import * as React from 'react';
import { getValues, getInitialValues, fieldsUpdater } from './helpers';

export default (formName: string, Provider: ContextProvider) =>
  class Form extends React.Component<FormProps, FormState> {
    // // keep tracks of what fields are mounted in the Form
    fieldsInfo = {};

    updateField = (fieldName: string, value: mixed) => {
      // always is isTouched to true when value changes
      this.setState(fieldsUpdater(fieldName, { value, isTouched: true }));
    };

    /**
     * This function is here because React batches setState in event handlers.
     * In order for handleValidate to work in the same event handler
     * where handleChange is called, need to use the functional setState here.
     */
    validateField = (fieldName: string, onValidate: FieldOnValidate) => {
      this.setState(prevState => {
        const fieldValue = prevState.fields[fieldName]
          ? prevState.fields[fieldName].value
          : undefined;
        const result = onValidate(fieldValue);

        // async field onValid
        if (result instanceof Promise) {
          result
            .then(error => {
              this.setState(fieldsUpdater(fieldName, { error }));
            })
            .catch(error => {
              this.setState(fieldsUpdater(fieldName, { error: error.message }));
            });
          return null;
        }

        return fieldsUpdater(fieldName, { error: result })(prevState);
      });
    };

    registerField = (fieldName: string, info: {}) => {
      if (!this.fieldsInfo[fieldName]) {
        this.fieldsInfo[fieldName] = info;
      }
    };

    handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
      event.preventDefault();
      // TODO if there is any error dont do anything

      const { onSubmit } = this.props;
      const { fields } = this.state;
      if (onSubmit) {
        // TODO validate

        const values = getValues(fields);
        await onSubmit(values);
      }
      return false;
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
