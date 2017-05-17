var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var articleEntity = new Article({
    title: 'wes',
    url: 'http://192.168.99.100:3000',
    text: 'test data',
    created: new Date(),
    updated: new Date()
  });

  //save record
  articleEntity.save(function (err, newPost) {
    if (err) return next(err);
  });
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