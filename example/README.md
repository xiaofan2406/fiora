# Fiora
[![Styled with prettier][prettier-badge]][prettier] [![Dependencies Status][dependencies-badge]][dependencies] [![Build Status][build-badge]][build] [![Coverage Status][coverage-badge]][coverage]

[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier
[dependencies-badge]: https://img.shields.io/david/xiaofan2406/fiora.svg?style=flat-square
[dependencies]: https://david-dm.org/xiaofan2406/fiora
[build-badge]: https://img.shields.io/travis/xiaofan2406/fiora/redux.svg?style=flat-square
[build]: https://travis-ci.org/xiaofan2406/fiora/branches
[coverage-badge]: https://img.shields.io/codecov/c/github/xiaofan2406/fiora/redux.svg?style=flat-square
[coverage]: https://codecov.io/gh/xiaofan2406/fiora/branches/redux

A simple boilerplate for starting new React projects.


## Get Started
```
git clone https://github.com/xiaofan2406/fiora.git
yarn
yarn dev
```


## Features

##### Redux
  - [Official documentation](http://redux.js.org)
  - Use [`redux-immutable-state-invariant`](https://github.com/leoasis/redux-immutable-state-invariant) in development to protect state from muatation
  - Include [`redux-logger`](https://github.com/evgenyrodionov/redux-logger) in development
  - Include [`redux-thunk`](https://github.com/gaearon/redux-thunk) middleware

##### CSS
  - No PostCSS, SASS or CSS Module setup
  - Using [`emotion`](https://github.com/tkh44/emotion) in extract mode
  - Includes a Semantic UI [`reset.css`](https://github.com/Semantic-Org/Semantic-UI/blob/master/dist/components/reset.css)

##### Code Splitting
  - Base on [Predictable long term caching with webpack](https://medium.com/webpack/predictable-long-term-caching-with-webpack-d3eee1d3fa31)
  - Includes a solution for dynamic import that helps async loading

##### Hot Module Replacement
  - Using [`react-hot-loader@next`](https://github.com/gaearon/react-hot-loader/tree/next) to include functional components hot reload during development

##### Component Testing
  - Using [`jest`](https://facebook.github.io/jest) with setup based on [create-react-app](https://github.com/facebookincubator/create-react-app)

##### Progressive Web App
  - Based on [`create-react-app`](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app)
  - Using [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) as a baseline measurement

##### [React Router v4](https://reacttraining.com/react-router)


## Commands

##### Development
```
yarn dev
```

##### Testing
```
yarn test
```

##### Production
- Build the project for production
  ```
  yarn build
  ```
- Start a local server to test production build
  ```
  yarn prod
  ```


## Project Structure
Path                | Import Alias | Description
------------------- | ------------ | -------------------------------------------------------
**config/**         |              | Project tooling configuration files
**src/**            | `src`        | Project source files directory
src/**assets/**     | `assets`     | Common static assets directory
src/**components/** | `components` | Components directory
src/**configs/**    | `configs`    | App config values directory
src/**hocs/**       | `hocs`       | Higher-order components directory
src/**router/**     |              | React Router setup and route-level components directory
src/**store**       | `store`      | Redux store and its _module_ folder
src/**styles/**     | `styles`     | Global CSS directory
src/**utils/**      | `utils`      | Utility functions directory
src/**widgets/**    | `widgets`    | Small non business logic related components directory
