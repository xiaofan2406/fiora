const path = require('path');
const ip = require('ip');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const escape = require('escape-string-regexp');
const common = require('./webpack.common');
const paths = require('./paths');

// https://github.com/facebookincubator/create-react-app/blob/master/packages/react-dev-utils/ignoredFiles.js
const ignoredFiles = new RegExp(
  `^(?!${escape(
    path.normalize(`${paths.appSrc}/`).replace(/[\\]+/g, '/')
  )}).+/node_modules/`,
  'g'
);

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: `${paths.appSrc}/index.js`,
  resolve: common.resolve,
  output: {
    filename: 'js/bundle.js',
    chunkFilename: 'js/[name].chunk.js',
    // Necessary for HMR to know where to load the hot update chunks
    publicPath: '/',
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true,
    devtoolModuleFilenameTemplate: ({ absoluteResourcePath }) =>
      path.resolve(absoluteResourcePath),
  },
  module: {
    strictExportPresence: true,
    rules: [
      ...common.rules,
      {
        test: /\.(js|mjs)$/,
        include: [paths.appSrc, paths.libSrc],
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: `${paths.appSrc}/assets/index.html`,
      favicon: `${paths.appSrc}/assets/favicon.ico`,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  node: common.node,
  performance: false,
  devServer: {
    compress: true,
    contentBase: `${paths.appSrc}/assets`,
    watchContentBase: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    hot: true,
    publicPath: '/',
    stats: 'errors-only',
    watchOptions: {
      ignored: ignoredFiles,
    },
    https: process.env.HTTPS === 'true',
    host: process.env.HOST || ip.address(),
    port: process.env.PORT || 8000,
  },
};
