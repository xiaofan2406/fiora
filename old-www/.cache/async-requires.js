// prefer default export if available
const preferDefault = m => (m && m.default) || m;

exports.components = {
  'component---cache-dev-404-page-js': () =>
    import('/home/xiaofan/dev/fiora/www/.cache/dev-404-page.js' /* webpackChunkName: "component---cache-dev-404-page-js" */),
  'component---src-pages-404-mdx': () =>
    import('/home/xiaofan/dev/fiora/www/src/pages/404.mdx' /* webpackChunkName: "component---src-pages-404-mdx" */),
  'component---src-pages-api-mdx': () =>
    import('/home/xiaofan/dev/fiora/www/src/pages/api.mdx' /* webpackChunkName: "component---src-pages-api-mdx" */),
  'component---src-pages-index-mdx': () =>
    import('/home/xiaofan/dev/fiora/www/src/pages/index.mdx' /* webpackChunkName: "component---src-pages-index-mdx" */),
  'component---src-pages-tutorial-mdx': () =>
    import('/home/xiaofan/dev/fiora/www/src/pages/tutorial.mdx' /* webpackChunkName: "component---src-pages-tutorial-mdx" */),
};

exports.data = () => import('/home/xiaofan/dev/fiora/www/.cache/data.json');
