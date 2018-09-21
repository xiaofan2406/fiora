import * as React from 'react';
import FioraFormMeta from './FioraFormMeta';

export default (Consumer: ContextConsumer) => {
  const FormMeta: React.SFC<FormMetaProps> = ({ children }) => (
    <Consumer>
      {({ fields, error, isValidating, isSubmitting }) => (
        <FioraFormMeta
          error={error}
          isValidating={isValidating}
          isSubmitting={isSubmitting}
          isTouched={Object.keys(fields).some(name => fields[name].isTouched)}
          isValid={!Object.keys(fields).some(name => fields[name].error)}
        >
          {children}
        </FioraFormMeta>
      )}
    </Consumer>
  );
  return FormMeta;
};
