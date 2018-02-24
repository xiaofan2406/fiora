module.exports = {
  presets: [
    ['@babel/preset-env', { useBuiltIns: 'usage' }],
    ['@babel/preset-react', { useBuiltIns: true }],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',

    [
      '@babel/plugin-proposal-object-rest-spread',
      { loose: true, useBuiltIns: true },
    ],

    // Enable `export default from` and `export * as ns from`
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
  ],
};
