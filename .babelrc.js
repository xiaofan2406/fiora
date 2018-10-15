const env = process.env.NODE_ENV;

const isTest = env === 'test'; // used for testing lib src
const isProduction = env === 'production'; // used for rollup build
const cjs = process.env.MODULE === 'cjs';

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
        modules: cjs || isTest ? 'commonjs' : false,
      },
    ],
    ['@babel/preset-react', { useBuiltIns: true }],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ],
};
