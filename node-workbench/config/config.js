var path = require('path'),
  rootPath = path.normalize(__dirname + '/..'),
  env = process.env.NODE_ENV || 'development',
  projectPort = 3000;

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'node-workbench'
    },
    port: process.env.PORT || projectPort,
    db: 'mongodb://120.77.159.89:27018/node-workbench-dev'
  },

  test: {
    root: rootPath,
    app: {
      name: 'node-workbench'
    },
    port: process.env.PORT || projectPort,
    db: 'mongodb://120.77.159.89:27018/node-workbench-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'node-workbench'
    },
    port: process.env.PORT || projectPort,
    db: 'mongodb://120.77.159.89:27018/node-workbench'
  }
};

module.exports = config[env];
