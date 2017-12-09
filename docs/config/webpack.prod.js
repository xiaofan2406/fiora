const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const common = require('./webpack.common');
const { paths } = require('./configs');

const vendorEntries = {
  'vendor-react': ['react', 'react-dom', 'prop-types'],
  'vendor-redux': ['redux', 'react-redux', 'redux-thunk'],
  'vendor-emotion': ['emotion', 'react-emotion'],
  'vendor-other': ['react-router-dom', 'fiora'],
};

module.exports = {
  bail: true,
  devtool: 'source-map',
  entry: {
    main: `${paths.docSrc}/index.js`,
    ...vendorEntries,
  },
  resolve: common.resolve,
  output: {
    path: paths.docDist,
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: ({ absoluteResourcePath }) =>
      path.relative(paths.docSrc, absoluteResourcePath),
  },
  module: {
    strictExportPresence: true,
    rules: [
      ...common.rules,
      {
        test: /\.js$/,
        include: [paths.docSrc, paths.libSrc],
        loader: 'babel-loader',
        options: {
          compact: true,
        },
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
                sourceMap: true,
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NamedChunksPlugin(
      chunk =>
        chunk.name ||
        chunk.mapModules(m => path.relative(m.context, m.request)).join('_')
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: Object.keys(vendorEntries),
      minChunks: Infinity,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: `${paths.docSrc}/assets/index.html`,
      favicon: `${paths.docSrc}/assets/favicon.ico`,
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
        minifyURLs: true,
      },
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      cache: true,
      uglifyOptions: {
        ecma: 6,
        compress: {
          comparisons: false,
        },
        output: {
          ascii_only: true,
          ecma: 6,
        },
        mangle: {
          safari10: true,
        },
      },
    }),
    new ExtractTextPlugin('css/[name].[contenthash:8].css'),
    new ManifestPlugin({ fileName: 'asset-manifest.json' }),
    new FileManagerPlugin({
      onEnd: {
        copy: [
          {
            source: `${paths.docDist}/index.html`,
            destination: `${paths.docDist}/200.html`,
          },
        ],
      },
    }),
  ],
  node: common.node,
};
