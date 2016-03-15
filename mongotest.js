var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var url = 'mongodb://localhost:27017/comtsingkuo';
//MongoClient.connect(url, function(err, db) {
//    assert.equal(null, err);
//    console.log("Connected correctly to server.");
//    db.close();
//})

//var insertDocument = function(db, callback) {
//    db.collection('wordpad').insertOne( {
//        "page":"index",
//        "module":"page content",
//        "name":"panel_three",
//        "section":"header",
//        "content":" 业余学习内容",
//        "createDate":new Date(),
//        "updateDate":new Date()
//    }, function(err, result) {
//        assert.equal(err, null);
//        console.log("Inserted a document into the restaurants collection.");
//        callback();
//    });
//};


//
//MongoClient.connect(url, function(err, db) {
//    assert.equal(null, err);
//    insertDocument(db, function() {
//        db.close();
//    });
//});

var panels;
var headers = new Array();
var bodys = new Array();
var findPanels = function(db, callback) {
    var cursor = db.collection('wordpad').find({ $and :[{"page": "index"}, {"module": "page content"}]});

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
            console.log(headers[0]);
            console.log(bodys[0]);
        } else {
            callback;
        }
    });
};

//var updateRestaurants = function(db, callback) {
//    db.collection('restaurants').updateOne({
//        "name":"Juni"
//    },{
//        $set: {"cuisine":"American (New)"},
//        $currentDate: {"lastModified":{$type:"date"}}
//    }, function(err, results) {
//            console.log(results);
//            callback();
//        }
//    );
//};

//var updateRestaurants = function(db, callback) {
//    db.collection('restaurants').replaceOne({
//        "restaurant_id":"41704620"
//    },{
//        "name" : "Vella 2",
//        "address" : {
//            "coord" : [ -73.9557413, 40.7720266 ],
//            "building" : "1480",
//            "street" : "2 Avenue",
//            "zipcode" : "10075"
//        }
//    }, function(err, results) {
//        console.log(results);
//        callback();
//    });
//};

//var removeRestaurants = function(db, callback) {
//    db.collection('restaurants').deleteMany({
//        "borough":"Manhattan"
//    },function(err, results) {
//        console.log(results);
//        callback();
//    });
//};

//var aggregateRestaurants = function(db, callback) {
//    db.collection('restaurants').aggregate(
//        [
//            {
//                $group: {"_id": "$borough", "count": { $sum: 1}}
//            }
//        ]
//    ).toArray(function(err, result) {
//            assert.equal(err, null);
//            console.log(result);
//            callback(result);
//        });
//};

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    findPanels(db, function() {
        db.close();
    });
});