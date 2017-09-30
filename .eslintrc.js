module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
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
    'import/no-extraneous-dependencies': 0, // allow import devDependencies
    'react/forbid-prop-types': 0, // allow all types of PropTypes
    'react/jsx-filename-extension': 0 // enfore all .js extension
  }
};
