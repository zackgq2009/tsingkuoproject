var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var url = 'mongodb://localhost:27017/test';
//MongoClient.connect(url, function(err, db) {
//    assert.equal(null, err);
//    console.log("Connected correctly to server.");
//    db.close();
//})

//var insertDocument = function(db, callback) {
//    db.collection('restaurants').insertOne( {
//        "address" : {
//            "street":"2 Avenue",
//            "zipcode":"10075",
//            "building":"1480",
//            "coord":[-73.9557413, 40.7720266]
//        },
//        "borough":"Manhattan",
//        "cuisine":"Italian",
//        "grades":[
//            {
//                "date" : new Date("2014-10-01T00:00:00Z"),
//                "grade" : "A",
//                "score" : 11
//            },
//            {
//                "date" : new Date("2014-01-16T00:00:00Z"),
//                "grade" : "B",
//                "score" : 17
//            }
//        ],
//        "name":"Vella",
//        "restaurant_id":"41704620"
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

//var findRestaurants = function(db, callback) {
//    var cursor = db.collection('restaurants').find({ $or :[{"cuisine": "Italian"}, {"address.zipcode": "10075"}]}).sort({"borough":1,"address.zipcode":1});
//
//    cursor.forEach(function(doc) {
//        //assert.equal(null, err);
//        if(doc != null) {
//            console.dir(doc); //console.dir针对一个object，对他拥有的所有属性均展示出来
//        }
//        else {
//            callback();
//        }
//    }, function(err) {
//        assert.equal(null, err);
//    });
//};

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

var updateRestaurants = function(db, callback) {
    db.collection('restaurants').replaceOne({
        "restaurant_id":"41704620"
    },{
        "name" : "Vella 2",
        "address" : {
            "coord" : [ -73.9557413, 40.7720266 ],
            "building" : "1480",
            "street" : "2 Avenue",
            "zipcode" : "10075"
        }
    }, function(err, results) {
        console.log(results);
        callback();
    });
};

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    updateRestaurants(db, function() {
        db.close();
    });
});