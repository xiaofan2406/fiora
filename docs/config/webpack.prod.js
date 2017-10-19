const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const common = require('./webpack.common');
const { paths } = require('./configs');
const babelConfig = require('../.babelrc');

module.exports = {
  bail: true,
  devtool: 'source-map',
  entry: {
    polyfill: require.resolve('./polyfills'),
    main: `${paths.srcPath}/index.js`,
    vendor: [
      'fiora',
      'emotion',
      'react',
      'react-dom',
      'react-emotion',
      'react-redux',
      'react-router-dom',
      'redux',
      'redux-thunk'
    ]
  },
  resolve: common.resolve,
  output: {
    path: paths.distPath,
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
    publicPath: '/',
    // Point sourcemap entries to original disk location
    devtoolModuleFilenameTemplate: info =>
      path
        .relative(paths.srcPath, info.absoluteResourcePath)
        .replace(/\\/g, '/')
  },
  module: {
    strictExportPresence: true,
    rules: [
      ...common.rules,
      {
        test: /\.js$/,
        include: paths.srcPath,
        loader: 'babel-loader',
        options: {
          compact: true,
          presets: [babelConfig]
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  node: common.node,
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NamedChunksPlugin(
      chunk =>
        chunk.name ||
        chunk.mapModules(m => path.relative(m.context, m.request)).join('_')
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: `${paths.srcPath}/assets/index.html`,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        comparisons: false
      },
      output: {
        comments: false,
        ascii_only: true
      },
      sourceMap: true
    }),
    new ExtractTextPlugin('css/[name].[contenthash:8].css'),
    new FileManagerPlugin({
      onEnd: {
        copy: [
          {
            source: `${paths.distPath}/index.html`,
            destination: `${paths.distPath}/200.html`
          },
          {
            source: `${paths.distPath}/index.html`,
            destination: `${paths.distPath}/404.html`
          }
        ]
      }
    })
  ]
};
