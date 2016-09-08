var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jackson Behan' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/resume', function(req, res, next) {
  res.render('resume');
});

router.get('/play', function(req, res, next) {
  res.render('play');
});

router.get('/scroll', function(req, res, next) {
  res.render('scroll');
});


module.exports = router;
