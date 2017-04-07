var path = require('path'),
  rootPath = path.normalize(__dirname + '/..'),
  env = process.env.NODE_ENV || 'development',
  projectPort = 3002;

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'node-workbench'
    },
    port: process.env.PORT || projectPort,
    db: 'mongodb://localhost/node-workbench-dev'
  },

  test: {
    root: rootPath,
    app: {
      name: 'node-workbench'
    },
    port: process.env.PORT || projectPort,
    db: 'mongodb://localhost/node-workbench-sit'
  },

  production: {
    root: rootPath,
    app: {
      name: 'node-workbench'
    },
    port: process.env.PORT || projectPort,
    db: 'mongodb://localhost/node-workbench'
  }
};

module.exports = config[env];
