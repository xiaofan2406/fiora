const { paths } = require('./configs');

module.exports = {
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      assets: `${paths.docSrc}/assets`,
      components: `${paths.docSrc}/components`,
      factories: `${paths.docSrc}/factories`,
      fiora: paths.libSrc,
      store: `${paths.docSrc}/store`,
      styles: `${paths.docSrc}/styles`,
      utils: `${paths.docSrc}/utils`,
      widgets: `${paths.docSrc}/widgets`,
    },
  },
  rules: [
    {
      test: /\.js$/,
      enforce: 'pre',
      loader: 'eslint-loader',
      include: paths.docSrc,
    },
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
