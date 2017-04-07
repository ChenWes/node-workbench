var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'node-workbench'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/node-workbench-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'node-workbench'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/node-workbench-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'node-workbench'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/node-workbench-production'
  }
};

module.exports = config[env];
