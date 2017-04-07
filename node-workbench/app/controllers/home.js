var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Nodejs Workbench'
  });
});

router.get('/main', function (req, res, next) {
  res.render('main', {
    title: 'Nodejs Workbench'
  });
});