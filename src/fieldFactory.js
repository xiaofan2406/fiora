/* @flow */
import * as React from 'react';
import FioraField from './FioraField';

export default (Consumer: ContextConsumer) => {
  const Field = ({ name, onValidate, children }: FieldProps) => (
    <Consumer>
      {({ fields, registerField, updateValue, validateField }) => (
        <FioraField
          name={name}
          onValidate={onValidate}
          updateValue={updateValue}
          registerField={registerField}
          validateField={validateField}
          {...fields[name]}
        >
          {children}
        </FioraField>
      )}
    </Consumer>
  );
  return Field;
};
