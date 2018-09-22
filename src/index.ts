import * as React from 'react';
import createForm from './formFactory';
import createField from './fieldFactory';
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
