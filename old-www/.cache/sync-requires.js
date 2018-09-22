// prefer default export if available
const preferDefault = m => (m && m.default) || m;

exports.components = {
  'component---cache-dev-404-page-js': preferDefault(
    require('/home/xiaofan/dev/fiora/www/.cache/dev-404-page.js')
  ),
  'component---src-pages-404-mdx': preferDefault(
    require('/home/xiaofan/dev/fiora/www/src/pages/404.mdx')
  ),
  'component---src-pages-api-mdx': preferDefault(
    require('/home/xiaofan/dev/fiora/www/src/pages/api.mdx')
  ),
  'component---src-pages-index-mdx': preferDefault(
    require('/home/xiaofan/dev/fiora/www/src/pages/index.mdx')
  ),
  'component---src-pages-tutorial-mdx': preferDefault(
    require('/home/xiaofan/dev/fiora/www/src/pages/tutorial.mdx')
  ),
};
