# Fiora
[![Version Status][version-badge]][version] [![Build Status][build-badge]][build] [![Coverage Status][coverage-badge]][coverage] [![Dependencies Status][dependencies-badge]][dependencies] [![Styled with prettier][prettier-badge]][prettier]

[version-badge]: https://img.shields.io/npm/v/fiora.svg?style=flat-square
[version]: https://www.npmjs.com/package/fiora
[build-badge]: https://img.shields.io/travis/xiaofan2406/fiora.svg?style=flat-square
[build]: https://travis-ci.org/xiaofan2406/fiora
[coverage-badge]: https://img.shields.io/codecov/c/github/xiaofan2406/fiora.svg?style=flat-square
[coverage]: https://codecov.io/gh/xiaofan2406/fiora
[dependencies-badge]: https://img.shields.io/david/xiaofan2406/fiora.svg?style=flat-square
[dependencies]: https://david-dm.org/xiaofan2406/fiora
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier

Forms, with react + redux

### Get Started

#### Install

Use either `yarn` or `npm`

```
yarn add fiora
```

Ensure `peerDependencies`: `react`, `redux` and `react-redux` are also installed.

#### Connect with redux

Add fiora `reducer` to root `combineReducers` under the key name `fiora`.

For example, in your **root** reducer file:

```js
import { reducer as fioraReducer } from 'fiora';
import todoReducer from './todoReducer';

export default combineReducers({
  todo: todoReducer,
  fiora: fioraReducer
})
```

The key name must be `fiora`.

Done. Next step, walk through the tutorial.
