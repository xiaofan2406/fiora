const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, './docs/config/webpack.dev.js')
      }
    }
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: ['react'],
  extends: ['airbnb', 'prettier'],
  rules: {
    'global-require': 0,
    'import/no-extraneous-dependencies': 0, // allow import devDependencies
    'react/forbid-prop-types': 0, // allow all types of PropTypes
    'react/require-default-props': 0,
    'react/jsx-filename-extension': 0 // enfore all .js extension
  }
};
