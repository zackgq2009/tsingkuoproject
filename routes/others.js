/**
 * Created by johnny on 16/3/8.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');

var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'circev1.uat.maxleap.cn',
    port: 3307,
    database: '573e6c5d667a23000159f57a',
    user: '573e6c5d667a23000159f57a',
    password: 'tester001'
});
// connection.connect();

/* GET full width page */
// router.get('/full-width', function(req, res, next) {
//     pool.query('INSERT INTO `573e6c5d667a23000159f57a`.`testData` SET ?', {name: 'test'}, function(err, result) {
//         if(err) throw err;
//         console.log(result.insertId);
//         pool.query('SELECT * FROM `573e6c5d667a23000159f57a`.`testData`', function(err, rows, fields) {
//             if(err) throw err;
//             console.log('The solution is : ', rows[0].name);
//
//             res.render('full-width', {mysqlData: rows[0].name});
//         });
//     });
// });

// router.get('/full-width', function(req, res, next) {
//     pool.query('SELECT * FROM `573e6c5d667a23000159f57a`.`testData`', function(err, rows, fields) {
//         if(err) throw err;
//         console.log('The solution is : ', rows[0].name);
//
//         res.render('full-width', {mysqlData: rows[0].name});
//     });
// })

router.route('/full-width')
    .get(function(req, res, next) {
        
        pool.query('SELECT * FROM `573e6c5d667a23000159f57a`.`testData`', function(err, rows, fields) {
            if(err) throw err;
            console.log('The solution is : ', rows[rows.length - 1].name);
            res.render('full-width', {mysqlData: rows[rows.length - 1].name});
        });
    })
    .post(function(req, res, next) {
        pool.query('INSERT INTO `573e6c5d667a23000159f57a`.`testData` SET ?', {name: req.body.name}, function(err, result) {
            if(err) throw err;
            res.json(result);
        });
    })
    // .post(function(req, res, mext) {
    //     pool.query('UPDATE `573e6c5d667a23000159f57a`.`testData` SET ? WHERE 1', {name: req.body.name}, function(err, result) {
    //         if(err) throw err;
    //         res.json(result);
    //     })
    // })
    // .post(function(req, res, next) {
    //     pool.query('DELETE FROM `573e6c5d667a23000159f57a`.`testData` WHERE ?', {name: req.body.name}, function(err, result) {
    //         if(err) throw err;
    //         res.json(result);
    //     })
    // })

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

router.get('/testing'), function(req, res, next) {
    res.render('testindex');
}
module.exports = router;