var express = require('express');
var router = express.Router();

/* GET portfolio one col page */
router.get('/portfolio-1-col', function(req, res, next) {
    res.render('portfolio-1-col');
});

/* GET portfolio two col page */
router.get('/portfolio-2-col', function(req, res, next) {
    res.render('portfolio-2-col');
});

/* GET portfolio three col page */
router.get('/portfolio-3-col', function(req, res, next) {
    res.render('portfolio-3-col');
});

/* GET portfolio four col page */
router.get('/portfolio-4-col', function(req, res, next) {
    res.render('portfolio-4-col');
});

/* GET portfolio item page */
router.get('/portfolio-item', function(req, res, next) {
    res.render('portfolio-item');
});

module.exports = router;