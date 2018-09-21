import * as React from 'react';
import FioraField from './FioraField';

const fieldFactory = (Consumer: ContextConsumer) => {
  const Field: React.SFC<FieldProps> = ({ name, onValidate, children }) => (
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

export default fieldFactory;
