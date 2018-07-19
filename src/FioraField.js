/* @flow */
import * as React from 'react';

class FioraField extends React.PureComponent<FioraFieldProps> {
  static defaultProps = {
    /*
      always default to empty string.
      avoid React warning about changing from controlled to uncontrolled
    */
    value: '',
  };

  componentDidMount() {
    const { name, registerField, onValidate } = this.props;
    registerField(name, {
      onValidate,
    });
  }

  handleChange = async (newValue: mixed) => {
    const { updateField, name, onValidate } = this.props;

    // TODO maybe an option allow skip validation on change
    const error = onValidate ? await onValidate(newValue) : undefined;

    updateField(name, {
      value: newValue,
      error,
    });
  };

  render() {
    const { name, children, value, error, isTouched } = this.props;

    console.log('[FioraField]: render', name);
    return children({
      value,
      error,
      isTouched,
      handleChange: this.handleChange,
    });
  }
}

export default FioraField;
