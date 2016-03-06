var express = require('express');
var router = express.Router();


var title = 'TsingKuo';
var navbarHome = '晴空万里';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: title, navbarHome: navbarHome });
  res.render('index', { header1: title});
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: title, navbarHome: navbarHome });
});

module.exports = router;
