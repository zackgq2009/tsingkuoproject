var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/comtsingkuo';

var headers = new Array();
var bodys = new Array();
var panels;

var findPanels = function(db, callback) {
  headers = [];bodys = [];panels = [];

  var cursor = db.collection('wordpad').find({ $and :[{"page": "index"}, {"module": "page content"}]}).sort({ "name": 1});

  cursor.toArray(function(err, doc) {
    assert.equal(err, null);
    if(doc != null){
      panels = doc;
      for(var i=0; i<panels.length; i++){
        if(panels[i].section == 'header'){
          headers.push(panels[i]);
        } else if(panels[i].section == 'body') {
          bodys.push(panels[i]);
        }
      }
    } else {
      db.close();
    }
    callback();
  });
};

/* GET home page. */
router.get('/', function(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    findPanels(db, function() {
      res.render('index', {panels: panels, headers: headers, bodys: bodys});
    });
  });
});

/* Get the about page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* Get the services page. */
router.get('/services', function(req, res, next) {
  res.render('services');
});

/* Get the contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

module.exports = router;
