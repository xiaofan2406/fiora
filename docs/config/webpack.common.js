const paths = require('./paths');

module.exports = {
  resolve: {
    extensions: ['.js', '.mjs', '.json'],
    mainFields: ['module', 'main'],
    alias: {
      assets: `${paths.appSrc}/assets`,
      components: `${paths.appSrc}/components`,
      factories: `${paths.appSrc}/factories`,
      fiora: paths.libSrc,
      store: `${paths.appSrc}/store`,
      styles: `${paths.appSrc}/styles`,
      utils: `${paths.appSrc}/utils`,
      widgets: `${paths.appSrc}/widgets`,
    },
  },
  rules: [
    {
      test: /\.(eot|otf|ttf|woff|woff2)(\?.*)?$/,
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[hash:8].[ext]',
      },
    },
    {
      test: /\.(jpg|jpeg|png|gif|svg|ico|webp)(\?.*)?$/,
      loader: 'file-loader',
      options: {
        name: 'media/[name].[hash:8].[ext]',
      },
    },
    {
      test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'media/[name].[hash:8].[ext]',
      },
    },
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};
