import React from 'react';
import { Provider } from 'react-redux';

import App from './App';
import { configureStore } from './store';

const store = configureStore();

const ConnectedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ConnectedApp;
