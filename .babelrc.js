const env = process.env.NODE_ENV;

const isTest = env === 'test'; // used for testing lib src
const isProduction = env === 'production'; // used for umd build

if (!isTest && !isProduction) {
  throw new Error(
    `Invalid NODE_ENV "${env}". Use only from ["test", "production"]`
  );
}

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { node: 'current' },
        useBuiltIns: 'usage',
        modules: process.env.MODULE === 'es6' ? false : 'commonjs',
      },
    ],
    ['@babel/preset-react', { useBuiltIns: true }],
    '@babel/preset-flow',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ],
};
