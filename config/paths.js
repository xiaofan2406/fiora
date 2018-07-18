const path = require('path');

const appRoot = path.join(__dirname, '..');
const appSrc = path.join(appRoot, 'docs');
const appDist = path.join(appRoot, 'dist', 'docs');
const libSrc = path.join(appRoot, 'src');
const umdDist = path.join(appRoot, 'dist', 'umd');

module.exports = {
  appRoot,
  appSrc,
  appDist,
  libSrc,
  umdDist,
};
