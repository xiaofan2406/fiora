import React from 'react';
import ReactDOM from 'react-dom';
import { serviceWorker } from 'utils';
import { Provider } from 'react-redux';

import Router from './router';
import configureStore from './store';

const store = configureStore(); // create with initialState if any

const rootElement = document.getElementById('root');

if (process.env.NODE_ENV === 'development') {
  const AppContainer = require('react-hot-loader').AppContainer;

  const render = () => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <Router />
        </Provider>
      </AppContainer>,
      rootElement
    );
  };

  render();

  if (module.hot) {
    module.hot.accept('./router', render);
  }
} else {
  ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>,
    rootElement
  );
  serviceWorker();
}
