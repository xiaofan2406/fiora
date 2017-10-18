import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'components';
import { ROUTES } from 'configs';

import Home from './Home';
import About from './About';
import Contact from './Contact';

function Router() {
  return (
    <BrowserRouter basename="https://xiaofan2406.github.io/fiora">
      <Layout>
        <Switch>
          <Route
            path={ROUTES.HOME.path}
            exact={ROUTES.HOME.exact}
            component={Home}
          />
          <Route
            path={ROUTES.ABOUT.path}
            exact={ROUTES.ABOUT.exact}
            component={About}
          />
          <Route
            path={ROUTES.CONTACT.path}
            exact={ROUTES.CONTACT.exact}
            component={Contact}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
