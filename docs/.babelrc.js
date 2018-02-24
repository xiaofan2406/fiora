const env = process.env.NODE_ENV;

const isDevelopment = env === 'development';
const isProduction = env === 'production';

if (!isDevelopment && !isProduction) {
  throw new Error(
    `Invalid NODE_ENV "${env}". Use only from ["development", "production"]`
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
        modules: false,
      },
    ],
    ['@babel/preset-react', { development: !isProduction, useBuiltIns: true }],
  ],
  plugins: [
    ['babel-plugin-emotion', { sourceMap: true, autoLabel: true }],

    '@babel/plugin-proposal-class-properties',

    [
      '@babel/plugin-proposal-object-rest-spread',
      { loose: true, useBuiltIns: true },
    ],

    // Enable `export default from` and `export * as ns from`
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',

    // Enable `import()` syntax
    '@babel/plugin-syntax-dynamic-import',

    isDevelopment && 'react-hot-loader/babel',
  ].filter(Boolean),
};
