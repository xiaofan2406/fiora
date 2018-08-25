/* @flow */
import * as React from 'react';
import createForm from './formFactory';
import createField from './fieldFactory';
import createFormMeta from './formMetaFactory';

const createFiora = () => {
  const { Provider, Consumer } = React.createContext();

  return {
    Form: createForm(Provider),
    Field: createField(Consumer),
    FormMeta: createFormMeta(Consumer),
  };
};

export default createFiora;
