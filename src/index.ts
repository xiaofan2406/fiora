import * as React from 'react';
import createField from './fieldFactory';
import createForm from './formFactory';
import createFormMeta from './formMetaFactory';

function createFiora() {
  const { Provider, Consumer } = React.createContext({} as FormState);

  return {
    Form: createForm(Provider),
    Field: createField(Consumer),
    FormMeta: createFormMeta(Consumer),
  };
}

export default createFiora;
