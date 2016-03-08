/**
 * Created by johnny on 16/3/8.
 */
var express = require('express');
var router = express.Router();

/* GET full width page */
router.get('/full-width', function(req, res, next) {
    res.render('full-width');
});

/* GET sidebar page */
router.get('/sidebar', function(req, res, next) {
    res.render('sidebar');
});

/* GET faq page */
router.get('/faq', function(req, res, next) {
    res.render('faq');
});

/* GET 404 page */
router.get('/404', function(req, res, next) {
    res.render('404');
});

/* GET pricing page */
router.get('/pricing', function(req, res, next) {
    res.render('pricing');
});

module.exports = router;