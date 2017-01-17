var express = require('express');
var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});
var router = express.Router();

hexo.init().then(function () {

});

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/comtsingkuo';

var indexPanelHeaders, indexPanelBodys, indexPortfolioItems, indexPanels, indexFeatures;
var database;

var findPanels = function(db, callback) {
  indexPanelHeaders = [];indexPanelBodys = [];indexPanels = [];

  var cursor = db.collection('wordpad').find({ $and :[{"page": "index"}, {"module": "panel"}]}).sort({ "name": 1});

  cursor.toArray(function(err, doc) {
    assert.equal(err, null);
    if(doc != null){
      indexPanels = doc;
      for(var i=0; i<indexPanels.length; i++){
        if(indexPanels[i].section == 'header'){
          indexPanelHeaders.push(indexPanels[i]);
        } else if(indexPanels[i].section == 'body') {
          indexPanelBodys.push(indexPanels[i]);
        }
      }
    } else {
      db.close();
    }
    findIndexPortfolioItems(db, callback);
  });
};

var findIndexPortfolioItems = function(db, callback) {
  indexPortfolioItems = [];

  var cursor = db.collection('images').find({$and: [{"page": "index"}, {"module": "portfolio_item"}]}).sort({"name": -1});

  cursor.toArray(function(err, doc) {
    assert.equal(err, null);
    if(doc != null) {
      indexPortfolioItems = doc;
    } else {
      db.close();
    }
    findIndexFeatures(db, callback);
  });
};

var findIndexFeatures = function(db, callback) {
  indexFeatures = [];

  var cursor = db.collection('wordpad').find({ $and: [{"page":"index"}, {"module":"features"}]}).sort({ "name" : 1 });

  cursor.toArray(function(err, doc) {
    assert.equal(err, null);
    if(doc != null) {
      indexFeatures = doc;
    } else {
      db.close();
    }
    callback();
  });
};

/* GET the database */
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  database = db;
});

/* GET home page. */
router.get('/', function(req, res, next) {
  findPanels(database, function() {
    res.render('index', {panels: indexPanels, headers: indexPanelHeaders, bodys: indexPanelBodys, items: indexPortfolioItems, features: indexFeatures});
  });
});

/* Get the about page. */
router.get('/aboutMe', function(req, res, next) {
  res.render('aboutMe');
});

/* Get the services page. */
router.get('/services', function(req, res, next) {
  res.render('services');
});

/* Get the contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

/*
get the proxy.pac file
 */
// router.get('/proxy.pac', function() {
//   return "SOCKS 10.10.0.157:8889";
// });

module.exports = router;
