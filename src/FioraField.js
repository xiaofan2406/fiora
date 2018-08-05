/* @flow */
import * as React from 'react';
import { DEFAULT_FIELD } from './helpers';

class FioraField extends React.PureComponent<FioraFieldProps> {
  static defaultProps = DEFAULT_FIELD;

  componentDidMount() {
    const { name, registerField, onValidate } = this.props;

    registerField(name, { onValidate });
  }

  handleChange = async (newValue: mixed) => {
    const { updateField, name } = this.props;

    updateField(name, newValue);
  };

  handleValidate = () => {
    const { name, onValidate, validateField } = this.props;

    if (onValidate) {
      validateField(name, onValidate);
    }
  };

  render() {
    const { name, children, value, error, isTouched } = this.props;

    console.log('[FioraField]: render', name);
    return children({
      value,
      error,
      isTouched,
      handleChange: this.handleChange,
      handleValidate: this.handleValidate,
    });
  }
}

export default FioraField;
