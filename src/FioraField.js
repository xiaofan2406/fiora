/* @flow */
import * as React from 'react';
import { DEFAULT_FIELD } from './helpers';

class FioraField extends React.PureComponent<FioraFieldProps, FioraFieldState> {
  static defaultProps = DEFAULT_FIELD;

  state = {
    isValidating: false,
  };

  componentDidMount() {
    const { name, registerField } = this.props;

    registerField(name, { validator: this.validator });
  }

  handleChange = async (newValue: mixed) => {
    const { updateField, name } = this.props;

    updateField(name, newValue);
  };

  validator = async (value: mixed) => {
    const { onValidate } = this.props;
    if (onValidate) {
      try {
        this.setState({ isValidating: true });
        const error = await onValidate(value);
        this.setState({ isValidating: false });

        return error;
      } catch (error) {
        // TODO handle error
        this.setState({ isValidating: false });
      }
    }
    return null;
  };

  handleValidate = () => {
    const { name, validateField } = this.props;

    validateField(name);
  };

  render() {
    const { name, children, value, error, isTouched } = this.props;
    const { isValidating } = this.state;

    console.log('[FioraField]: render', name);
    return children({
      value,
      error,
      isTouched: !!isTouched,
      isValidating,
      handleChange: this.handleChange,
      handleValidate: this.handleValidate,
    });
  }
}

export default FioraField;
