module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
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
  extends: ['airbnb'],
  rules: {
    'new-cap': 0, // disable for HigherOrderComponent wrapping
    'no-console': 0, // allow console.log etc
    'no-underscore-dangle': 0, // allow _func
    'no-param-reassign': ['error', { props: false }], // e.target.value = '';
    'no-plusplus': 0, // allow i++
    'no-confusing-arrow': 0,
    'no-mixed-operators': 0,
    'comma-dangle': [2, 'never'], // disallow trailing comma
    'global-require': 0,
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement'
    ],
    'react/require-default-props': 0,
    'jsx-a11y/no-static-element-interactions': 0, // allow div onClick etc
    'import/no-extraneous-dependencies': 0, // allow usage of devDependencies
    'react/forbid-prop-types': 0, // allow PropTypes.object
    'react/jsx-filename-extension': 0, // enfore all .js extension
    'no-unused-vars': [2, { ignoreRestSiblings: true }],
    'arrow-parens': [2, 'as-needed'],
    'react/no-unused-prop-types': [2, { skipShapeProps: true }] // skip shape
  }
};
