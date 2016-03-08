var express = require('express');
var router = express.Router();


var title = 'TsingKuo';
var navbarHome = '晴空万里';

/*
script files address
 */
//var jqueryfile = '<script src="/javascripts/jquery.js"></script>';
//var bootstrapminfile = '<script src="/javascripts/bootstrap.min.js"></script>';
//var bootstrapfile = '<script src="/javascripts/bootstrap.js"></script>';
var contactmefile = '<script src="/javascripts/contact_me.js"></script>';
var jqbootstrapvalidationfile = '<script src="/javascripts/jqBootstrapValidation.js"></script>';
//var npmfile = '<script src="/javascripts/npm.js"></script>';
var nullfile = '<!-- This page do not need this javascript -->';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: title, navbarHome: navbarHome, specialjsfiles: nullfile});
});

/* Get the about page. */
router.get('/about', function(req, res, next) {
  res.render('about', {title: title, navbarHome: navbarHome, specialjsfiles: nullfile});
});

/* Get the services page. */
router.get('/services', function(req, res, next) {
  res.render('services', {title: title, navbarHome: navbarHome, specialjsfiles: nullfile});
});

/* Get the contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {title: title, navbarHome: navbarHome, specialjsfiles: contactmefile+jqbootstrapvalidationfile});
});


module.exports = router;
