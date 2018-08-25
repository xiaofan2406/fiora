/* @flow */
import * as React from 'react';
import createForm from './formFactory';
import createField from './fieldFactory';

const createFiora = () => {
  const { Provider, Consumer } = React.createContext();

  return {
    Form: createForm(Provider),
    Field: createField(Consumer),
  };
};

export default createFiora;
