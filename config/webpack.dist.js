const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const libSrcPath = path.join(__dirname, '../src');
const umdDistPath = path.join(__dirname, '../dist/umd');

module.exports = {
  mode: 'production',
  bail: true,
  devtool: 'source-map',
  entry: `${libSrcPath}/index.js`,
  resolve: {
    extensions: ['.js', '.mjs', '.json'],
    mainFields: ['module', 'main'],
  },
  output: {
    path: umdDistPath,
    filename: 'fiora-umd.min.js',
    libraryTarget: 'umd',
    library: 'Fiora',
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|mjs)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: libSrcPath,
      },
      {
        test: /\.(js|mjs)$/,
        include: libSrcPath,
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
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  performance: false,
};
