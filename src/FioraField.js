/* @flow */
import * as React from 'react';

type FioraFieldProps = FieldProps & {
  updateField: (fieldName: string, newValue: any) => void,
  registerField: (fieldName: string, info: {}) => void,
  validateField: (fieldName: string) => void,
} & InternalFieldState;

type FioraFieldState = {
  isValidating: $PropertyType<FieldRenderProps, 'isValidating'>,
};

class FioraField extends React.PureComponent<FioraFieldProps, FioraFieldState> {
  /**
   * Always default value to empty string to avoid React warning.
   * React will warning if a input value changes from undefined to controlled.
   */
  static defaultProps = {
    value: '',
  };

  state = {
    isValidating: false,
  };

  componentDidMount() {
    const { name, registerField } = this.props;

    registerField(name, { validator: this.validator });
  }

  handleChange = (newValue: any) => {
    const { updateField, name } = this.props;

    updateField(name, newValue);
  };

  validator = async (value: any) => {
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
    const { children, value, error, isTouched } = this.props;
    const { isValidating } = this.state;

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
