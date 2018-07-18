const env = process.env.NODE_ENV;

const isTest = env === 'test'; // used for testing lib src
const isDevelopment = env === 'development'; // used for running docs app
const isProduction = env === 'production'; // used for build docs app and compile lib src

if (!isTest && !isDevelopment && !isProduction) {
  throw new Error(
    `Invalid NODE_ENV "${env}". Use only from ["test", "development", "production"]`
  );
}

const emotionConfig = isProduction
  ? { hoist: true }
  : { sourceMap: true, autoLabel: true };

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { node: 'current' },
        useBuiltIns: 'usage',
        modules:
          isDevelopment || process.env.MODULE === 'es6' ? false : 'commonjs',
      },
    ],
    ['@babel/preset-react', { development: !isProduction, useBuiltIns: true }],
    '@babel/preset-flow',
  ],
  plugins: [
    ['babel-plugin-emotion', emotionConfig],

    '@babel/plugin-proposal-class-properties',

    [
      '@babel/plugin-proposal-object-rest-spread',
      { loose: true, useBuiltIns: true },
    ],

    '@babel/plugin-syntax-dynamic-import',

    isDevelopment && 'react-hot-loader/babel',
  ].filter(Boolean),
};
