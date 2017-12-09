const server = require('serve');
const configs = require('./configs');

server(configs.paths.docDist, {
  port: configs.testProdPort,
  single: true,
});

console.log('Production server listening...');
console.log(`http://localhost:${configs.testProdPort}`);
console.log(`http://${configs.localIp}:${configs.testProdPort}`);
