const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const common = require('./webpack.common');
const paths = require('./paths');

module.exports = {
  mode: 'production',
  bail: true,
  devtool: 'source-map',
  entry: `${paths.appSrc}/index.js`,
  resolve: common.resolve,
  output: {
    path: paths.appDist,
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: ({ absoluteResourcePath }) =>
      path.relative(paths.appSrc, absoluteResourcePath),
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
      ...common.rules,
      {
        test: /\.(js|mjs)$/,
        include: [paths.appSrc, paths.libSrc],
        loader: 'babel-loader',
        options: {
          compact: true,
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              sourceMap: true,
            },
          },
        ],
      },
    ],
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
      new OptimizeCSSAssetsPlugin(),
    ],
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
    }),
    new FileManagerPlugin({
      onEnd: {
        copy: [
          {
            // https://surge.sh/help/adding-a-200-page-for-client-side-routing
            source: `${paths.appDist}/index.html`,
            destination: `${paths.appDist}/200.html`,
          },
        ],
      },
    }),
  ],
  node: common.node,
  performance: false,
};
