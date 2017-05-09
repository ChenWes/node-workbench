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
  res.render('manage/main', {
    title: 'Nodejs Workbench'
  });
});

router.get('/home', function (req, res, next) {
  res.render('manage/home', {
    title: 'Nodejs Workbench'
  });
});

router.get('/form', function (req, res, next) {
  res.render('manage/form', {
    title: 'Nodejs Workbench'
  });
});

router.get('/login', function (req, res, next) {
  res.render('home/login', {
    title: 'Nodejs Workbench'
  });
});