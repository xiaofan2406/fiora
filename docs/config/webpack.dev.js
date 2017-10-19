const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const { devServerPort, devServerIp, paths } = require('./configs');
const babelConfig = require('../.babelrc');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    require.resolve('./polyfills'),
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${devServerIp}:${devServerPort}`,
    'webpack/hot/only-dev-server',
    `${paths.srcPath}/index.js`
  ],
  resolve: common.resolve,
  output: {
    // For dev, `path` and `filename` are not important because of using webpack-dev-server
    path: paths.distPath,
    filename: 'bundle.js',
    chunkFilename: 'js/[name].chunk.js',
    // Necessary for HMR to know where to load the hot update chunks
    publicPath: '/',
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true,
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
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
          presets: [babelConfig],
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  node: common.node,
  performance: { hints: false },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: `${paths.srcPath}/assets/index.html`
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    compress: true,
    historyApiFallback: { disableDotRule: true },
    hot: true,
    publicPath: '/',
    stats: 'errors-only',
    watchOptions: {
      ignored: /node_modules/
    },
    https: process.env.HTTPS === 'true',
    host: devServerIp,
    port: devServerPort,
    before(app) {
      app.use((req, res, next) => {
        if (req.url === '/service-worker.js') {
          res.setHeader('Content-Type', 'text/javascript');
          res.send();
        } else {
          next();
        }
      });
    }
  }
};
