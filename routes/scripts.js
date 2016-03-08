var express = require('express');
var router = express.Router();

var jqueryfile = '<script src="/javascripts/jquery.js"></script>';
var bootstrapminfile = '<script src="/javascripts/bootstrap.min.js"></script>';
var bootstrapfile = '<script src="/javascripts/bootstrap.js"></script>';
var contactmefile = '<script src="/javascripts/contact_me.js"></script>';
var jqbootstrapvalidationfile = '<script src="/javascripts/jqBootstrapValidation.js"></script>';
var npmfile = '<script src="/javascripts/npm.js"></script>';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: title, navbarHome: navbarHome });
    res.render('index', { header1: title});
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: title, navbarHome: navbarHome });
});

router.get('/services', function(req, res, next) {
    res.render('services', { title: title, navbarHome: navbarHome });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: title, navbarHome: navbarHome });
});

module.exports = router;