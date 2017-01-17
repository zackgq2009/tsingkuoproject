var express = require('express');
var router = express.Router();

/* GET blog home 1 page */
router.get('/blog-home-1', function(req, res, next) {
    res.render('blog-home-1');
});

/* GET blog home 2 page */
router.get('/blog-home-2', function(req, res, next) {
    res.render('blog-home-2');
});

/* GET blog post page */
router.get('/blog-post', function(req, res, next) {
    res.render('blog-post');
});

// router.get('/ghost-blog', function (req, res, next) {
//     res.render('')
// });

module.exports = router;