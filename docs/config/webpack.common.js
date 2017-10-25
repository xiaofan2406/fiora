const { paths } = require('./configs');

module.exports = {
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      assets: `${paths.srcPath}/assets`,
      components: `${paths.srcPath}/components`,
      configs: `${paths.srcPath}/configs`,
      fiora: `${paths.docPath}/../src`,
      hocs: `${paths.srcPath}/hocs`,
      store: `${paths.srcPath}/store`,
      styles: `${paths.srcPath}/styles`,
      utils: `${paths.srcPath}/utils`,
      widgets: `${paths.srcPath}/widgets`
    }
  },
  rules: [
    {
      test: /\.js$/,
      enforce: 'pre',
      loader: 'eslint-loader',
      include: paths.srcPath
    },
    {
      test: /\.(eot|otf|ttf|woff|woff2)(\?.*)?$/,
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[hash:8].[ext]'
      }
    },
    {
      test: /\.(jpg|jpeg|png|gif|svg|ico|webp)(\?.*)?$/,
      loader: 'file-loader',
      options: {
        name: 'media/[name].[hash:8].[ext]'
      }
    },
    {
      test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'media/[name].[hash:8].[ext]'
      }
    }
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
};
