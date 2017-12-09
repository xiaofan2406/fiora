const env = process.env.NODE_ENV;

if (env !== 'development' && env !== 'test' && env !== 'production') {
  throw new Error(
    `Invalid NODE_ENV "${env}". Use only from ["development", "test", "production"]`
  );
}

let plugins = [
  'babel-plugin-emotion',
  'babel-plugin-transform-class-properties',
  ['babel-plugin-transform-object-rest-spread', { useBuiltIns: true }],
  ['babel-plugin-transform-react-jsx', { useBuiltIns: true }],
  'babel-plugin-transform-export-extensions',
];

if (env === 'development') {
  plugins = [...plugins, 'react-hot-loader/babel'];
}

if (env === 'development' || env === 'test') {
  plugins = [
    ...plugins,
    'babel-plugin-transform-react-jsx-source',
    'babel-plugin-transform-react-jsx-self',
  ];
}

module.exports = {
  presets: [
    [
      'babel-preset-env',
      {
        targets: {
          browsers: [
            'Chrome >= 60',
            'Safari >= 10.1',
            'iOS >= 10.3',
            'Firefox >= 54',
            'Edge >= 15',
          ],
        },
        modules: false,
      },
    ],
    'babel-preset-react',
  ],
  plugins: [...plugins, 'babel-plugin-syntax-dynamic-import'],
};
