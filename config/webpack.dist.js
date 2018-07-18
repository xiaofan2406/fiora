const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');
const paths = require('./paths');

module.exports = {
  mode: 'production',
  bail: true,
  devtool: 'source-map',
  entry: `${paths.libSrc}/index.js`,
  resolve: common.resolve,
  output: {
    path: paths.umdDist,
    filename: 'fiora-umd.min.js',
    libraryTarget: 'umd',
    library: 'AdslotGrid',
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|mjs)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: [paths.appSrc, paths.libSrc],
      },
      {
        test: /\.(js|mjs)$/,
        include: [paths.appSrc, paths.libSrc],
        loader: 'babel-loader',
        options: {
          compact: true,
        },
      },
    ],
  },
  externals: {
    react: 'react',
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        cache: true,
        parallel: true,
        uglifyOptions: {
          ecma: 8,
          compress: {
            warnings: false,
            comparisons: false,
          },
          output: {
            comments: false,
            ascii_only: true,
          },
          mangle: {
            safari10: true,
          },
        },
      }),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.NamedModulesPlugin(),
  ],
  node: common.node,
  performance: false,
};
