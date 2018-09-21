import * as React from 'react';

class FioraFormMeta extends React.PureComponent<FioraFormMetaProps> {
  render() {
    const {
      children,
      error,
      isValidating,
      isSubmitting,
      isTouched,
      isValid,
    } = this.props;

    return children({ error, isValidating, isSubmitting, isTouched, isValid });
  }
}

export default FioraFormMeta;
