module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 9,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.mjs'],
      },
    },
  },
  plugins: ['react'],
  extends: ['airbnb', 'prettier'],
  rules: {
    'no-console': 0,
    'global-require': 0,
    'no-param-reassign': [2, { props: false }],
    'no-underscore-dangle': [2, { allowAfterThis: true }],
    'no-nested-ternary': 0,
    'import/no-extraneous-dependencies': 0, // allow import devDependencies
    'import/prefer-default-export': 0,
    'jsx-a11y/label-has-for': [2, { required: { every: ['name'] } }],
    'react/sort-comp': 0,
    'react/jsx-filename-extension': 0, // enforce all .js extension
    'react/prefer-stateless-function': 0,
    'react/require-default-props': 0, // allow undefined as prop value
    'react/jsx-one-expression-per-line': 0, // prettier takes care of it
    'react/jsx-wrap-multilines': 0, // prettier takes care of it
    'react/destructuring-assignment': 0, // cannot init state with props
    'react/forbid-prop-types': 0, // allow object, array PropTypes
    'react/button-has-type': [
      2,
      {
        button: true,
        submit: true,
        reset: true,
      },
    ],
  },
};
