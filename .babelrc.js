let plugins = [
  'babel-plugin-transform-class-properties',
  ['babel-plugin-transform-object-rest-spread', { useBuiltIns: true }],
  ['babel-plugin-transform-react-jsx', { useBuiltIns: true }],
  [
    'babel-plugin-transform-runtime',
    { helpers: false, polyfill: false, regenerator: true }
  ],
  'babel-plugin-transform-export-extensions',
  ['emotion/babel', { extractStatic: true }]
];

if (process.env.NODE_ENV === 'development') {
  plugins = [...plugins, 'react-hot-loader/babel'];
}

if (process.env.NODE_ENV === 'production') {
  plugins = [
    [
      // this plugin has to be the first or else it will not work
      'babel-plugin-transform-react-remove-prop-types',
      { removeImport: true }
    ],
    ...plugins
  ];
} else {
  plugins = [
    ...plugins,
    'babel-plugin-transform-react-jsx-source',
    'babel-plugin-transform-react-jsx-self'
  ];
}

if (process.env.NODE_ENV === 'test') {
  module.exports = {
    presets: [
      ['babel-preset-env', { targets: { node: 'current' } }],
      'babel-preset-react'
    ],
    plugins: [...plugins, 'babel-plugin-dynamic-import-node']
  };
} else {
  module.exports = {
    presets: [
      [
        'babel-preset-env',
        { targets: { uglify: true }, useBuiltIns: false, modules: false }
      ],
      'babel-preset-react'
    ],
    plugins: [
      ...plugins,
      ['babel-plugin-transform-regenerator', { async: false }],
      'babel-plugin-syntax-dynamic-import'
    ]
  };
}
