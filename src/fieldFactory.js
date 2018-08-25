/* @flow */
import * as React from 'react';
import FioraField from './FioraField';

export default (Consumer: ContextConsumer) => {
  const Field = ({ name, onValidate, children }: FieldProps) => (
    // console.log('[Field]: render');
    <Consumer>
      {({ fields, registerField, updateField, validateField }) => (
        <FioraField
          name={name}
          onValidate={onValidate}
          updateField={updateField}
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
