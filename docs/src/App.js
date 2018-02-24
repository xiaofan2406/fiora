import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';

import Router from './router';
import configureStore from './store';

const store = configureStore(); // create with initialState if any

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default hot(module)(App);
