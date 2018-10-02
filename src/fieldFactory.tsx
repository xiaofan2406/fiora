import * as React from 'react';
import FioraField from './FioraField';

function fieldFactory(Consumer: ContextConsumer) {
  const Field: React.SFC<FieldProps> = ({
    name,
    onValidate,
    children,
    ...rest // all html input attributes
  }) => (
    <Consumer>
      {({ fields, registerField, updateValue, validateField }) => (
        <FioraField
          {...rest}
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
}

export default fieldFactory;
