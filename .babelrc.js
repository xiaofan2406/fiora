module.exports = {
  presets: [
    ['babel-preset-env', { useBuiltIns: false, modules: 'commonjs' }],
    'babel-preset-react'
  ],
  plugins: [
    ['babel-plugin-transform-react-remove-prop-types', { removeImport: true }],
    'babel-plugin-transform-class-properties',
    ['babel-plugin-transform-object-rest-spread', { useBuiltIns: true }],
    ['babel-plugin-transform-react-jsx', { useBuiltIns: true }],
    [
      'babel-plugin-transform-runtime',
      { helpers: false, polyfill: false, regenerator: true }
    ],
    ['babel-plugin-transform-regenerator', { async: false }],
    'babel-plugin-transform-export-extensions'
  ]
};
