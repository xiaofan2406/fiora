/* @flow */
import * as React from 'react';
import createForm from './formFactory';
import createField from './fieldFactory';

const createFiora = (formName: string) => {
  const { Provider, Consumer } = React.createContext({});

  return {
    Form: createForm(formName, Provider),
    Field: createField(formName, Consumer),
    // Submit: createSubmit(formName),
  };
};

export default createFiora;
