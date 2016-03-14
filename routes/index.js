var express = require('express');
var router = express.Router();


var title = 'TsingKuo';
var navbarHome = '晴空万里';

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/comtsingkuo';

var headerone;
var bodyone;

var findHeaders = function(db, callback) {
  var cursor = db.collection('wordpad').find({ $and :[{"page": "index"}, {"module": "page content"}, {"name":"panel_one"}, {"section":"header"}]}).sort({"borough":1,"address.zipcode":1});

  cursor.forEach(function(doc) {
    //assert.equal(null, err);
    if(doc != null) {
      //console.dir(doc); //console.dir针对一个object，对他拥有的所有属性均展示出来
      headerone = doc.content;
    }
    else {
      callback();
    }
  }, function(err) {
    assert.equal(null, err);
  });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findHeaders(db, function() {
    db.close();
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: title, navbarHome: navbarHome, info:[{},{}]});
});

/* Get the about page. */
router.get('/about', function(req, res, next) {
  res.render('about', {title: title, navbarHome: navbarHome});
});

/* Get the services page. */
router.get('/services', function(req, res, next) {
  res.render('services', {title: title, navbarHome: navbarHome});
});

/* Get the contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {title: title, navbarHome: navbarHome});
});


module.exports = router;
