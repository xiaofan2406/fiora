let plugins = [
  'babel-plugin-transform-class-properties',
  ['babel-plugin-transform-object-rest-spread', { useBuiltIns: true }],
  ['babel-plugin-transform-react-jsx', { useBuiltIns: true }],
  [
    'babel-plugin-transform-runtime',
    { helpers: false, polyfill: false, regenerator: true }
  ],
  'babel-plugin-transform-export-extensions'
];

if (process.env.NODE_ENV === 'production') {
  plugins = [
    [
      // TODO test this
      // this plugin has to be the first or else it will not work
      'babel-plugin-transform-react-remove-prop-types',
      { removeImport: true }
    ],
    ...plugins
  ];
}

module.exports = {
  presets: [
    ['babel-preset-env', { useBuiltIns: false, modules: false }],
    'babel-preset-react'
  ],
  plugins: [
    ...plugins,
    ['babel-plugin-transform-regenerator', { async: false }]
  ]
};
