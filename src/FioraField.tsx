import * as React from 'react';

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

  // shouldComponentUpdate(
  //   nextProps: FioraFieldProps,
  //   nextState: FioraFieldState
  // ) {
  //   let changed = false;
  //   (Object.keys(nextProps) as (keyof FioraFieldProps)[]).forEach(key => {
  //     if (nextProps[key] !== this.props[key]) {
  //       console.log(
  //         `[FioraField]: Props ${key}: ${this.props[key]} -> ${nextProps[key]}`
  //       );
  //       changed = true;
  //     }
  //   });
  //   (Object.keys(nextState) as (keyof FioraFieldState)[]).forEach(key => {
  //     if (nextState[key] !== this.state[key]) {
  //       console.log(
  //         `[FioraField]: State ${key}: ${this.state[key]} -> ${nextState[key]}`
  //       );
  //       changed = true;
  //     }
  //   });

  //   return changed;
  // }

  componentDidMount() {
    const { name, registerField, onValidate } = this.props;

    registerField(name, {
      onValidate,
      beforeValidate: this.beforeValidate,
      afterValidate: this.afterValidate,
    });
  }

  updateValue = (newValue: FieldValue) => {
    const { updateValue, name } = this.props;

    updateValue(name, newValue);
  };

  beforeValidate = () => {
    this.setState({ isValidating: true });
  };

  afterValidate = () => {
    this.setState({ isValidating: false });
  };

  // validator = async (value: FieldValue) => {
  //   const { onValidate } = this.props;
  //   if (onValidate) {
  //     const res = onValidate(value);

  //     if (res instanceof Promise) {
  //       this.beforeValidate();
  //       try {
  //         const error = await res;
  //         this.updateError();
  //       } catch (err) {
  //         // TODO handle error
  //         return null;
  //       } finally {
  //         this.afterValidate();
  //       }
  //     }
  //     return res;
  //   }
  // };

  validate = () => {
    const { name, validateField } = this.props;

    validateField(name);
  };

  render() {
    const { children, value, error, isTouched } = this.props;
    const { isValidating } = this.state;
    // console.log('[FioraField]: render');

    return children({
      value,
      error,
      isTouched: !!isTouched,
      isValidating,
      updateValue: this.updateValue,
      validate: this.validate,
    });
  }
}

export default FioraField;
