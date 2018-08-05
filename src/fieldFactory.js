/* @flow */
import * as React from 'react';
import FioraField from './FioraField';

export default (formName: string, Consumer: ContextConsumer) => {
  const Field = ({ name: fieldName, onValidate, children }: FieldProps) => {
    console.log('[Field]: render');
    return (
      <Consumer>
        {({ fields, registerField, updateField, validateField }) => (
          <FioraField
            name={fieldName}
            onValidate={onValidate}
            updateField={updateField}
            registerField={registerField}
            validateField={validateField}
            {...fields[fieldName]}
          >
            {children}
          </FioraField>
        )}
      </Consumer>
    );
  };
  return Field;
};
