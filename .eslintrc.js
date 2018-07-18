module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.json'],
      },
    },
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
  plugins: ['react', 'flowtype'],
  extends: ['plugin:flowtype/recommended', 'airbnb', 'prettier'],
  rules: {
    'no-console': 0,
    'global-require': 0,
    'no-param-reassign': [2, { props: false }],
    'no-underscore-dangle': [2, { allowAfterThis: true }],
    'no-nested-ternary': 0,
    'import/extensions': [
      2,
      'always',
      { js: 'never', mjs: 'never', json: 'never' },
    ],
    'import/no-extraneous-dependencies': 0, // allow import devDependencies
    'react/jsx-filename-extension': 0, // enfore all .js extension
    'react/prefer-stateless-function': 0,
    'react/require-default-props': 0, // conflict flows takes care of it
    'jsx-a11y/label-has-for': [2, { required: { every: ['name'] } }],
    'react/jsx-one-expression-per-line': 0, // prettier takes care of it
    'react/jsx-wrap-multilines': 0, // prettier takes care of it
    'react/destructuring-assignment': 0, // cannot init state with props
    'flowtype/space-after-type-colon': 0,
  },
};
