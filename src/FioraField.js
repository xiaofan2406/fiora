/* @flow */
import * as React from 'react';
import type { FormState } from './formFactory';

type FioraFieldProps = FieldProps & {
  updateValue: $PropertyType<FormState, 'updateValue'>,
  registerField: $PropertyType<FormState, 'registerField'>,
  validateField: $PropertyType<FormState, 'validateField'>,
} & InternalFieldState;

type FioraFieldState = {
  isValidating: $PropertyType<FieldRenderProps, 'isValidating'>,
};

class FioraField extends React.Component<FioraFieldProps, FioraFieldState> {
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

  shouldComponentUpdate(
    nextProps: FioraFieldProps,
    nextState: FioraFieldState
  ) {
    let changed = false;
    Object.keys(nextProps).forEach(key => {
      if (nextProps[key] !== this.props[key]) {
        console.log(`[FioraField]: Props ${key}`);
        changed = true;
      }
    });
    Object.keys(nextState).forEach(key => {
      if (nextState[key] !== this.state[key]) {
        console.log(`[FioraField]: State ${key}`);
        changed = true;
      }
    });

    return changed;
  }

  componentDidMount() {
    const { name, registerField } = this.props;

    registerField(name, { validator: this.validator });
  }

  handleChange = (newValue: any) => {
    const { updateValue, name } = this.props;

    updateValue(name, newValue);
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
    console.log('[FioraField]: render');

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
