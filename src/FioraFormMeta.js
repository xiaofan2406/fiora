/* @flow */
import * as React from 'react';

type FioraFormMetaProps = {
  children: $PropertyType<FormMetaProps, 'children'>,
  error: $PropertyType<FormMetaRenderProps, 'error'>,
  isValidating: $PropertyType<FormMetaRenderProps, 'isValidating'>,
  isSubmitting: $PropertyType<FormMetaRenderProps, 'isSubmitting'>,
  isTouched: $PropertyType<FormMetaRenderProps, 'isTouched'>,
  isValid: $PropertyType<FormMetaRenderProps, 'isValid'>,
};

class FioraFormMeta extends React.PureComponent<FioraFormMetaProps> {
  render() {
    console.log('FioraFormMeta');
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
