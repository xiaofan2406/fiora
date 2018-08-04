/* @flow */
import * as React from 'react';
import { getValues, getInitialValues } from './helpers';

export default (formName: string, Provider: ContextProvider) =>
  class Form extends React.Component<FormProps, FormState> {
    // // keep tracks of what fields are mounted in the Form
    fieldsInfo = {};

    updateField = (fieldName: string, partial: {}) => {
      this.setState(prevState => ({
        fields: {
          ...prevState.fields,
          [fieldName]: {
            ...prevState.fields[fieldName],
            ...partial,
            isTouched: true, // any update should set isTouched to true
          },
        },
      }));
    };

    registerField = (fieldName: string, info: {}) => {
      if (!this.fieldsInfo[fieldName]) {
        this.fieldsInfo[fieldName] = info;
      }
    };

    handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
      event.preventDefault();
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
    };

    render() {
      console.log('[Form]: render');
      const { children, onSubmit, initialValues, ...rest } = this.props;
      return (
        <Provider value={this.state}>
          <form {...rest} name={formName} onSubmit={this.handleSubmit}>
            {children}
          </form>
        </Provider>
      );
    }
  };
