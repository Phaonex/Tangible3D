/**
 * Created by souzaalves on 06/06/16.
 */

function DB_connection(method){
    "use strict";


var Mongoclient = require('mongodb').MongoClient, assert = require('assert'), url = 'mongodb://localhost:27017/test',
    ObjectId = require('mongodb').ObjectID, mongoimport = require('mongoimport');

/*var ip_addr = process.env.OPENSHIFT_NODEJS_IP   || '127.0.0.1';
var port    = process.env.OPENSHIFT_NODEJS_PORT || '8080';

var connection_string = '127.0.0.1:27017/'+ process.env.OPENSHIFT_APP_NAME;

if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
    connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
}*/

this.Mongo_client = Mongoclient.connect(url, function (err,db,method) {
    assert.equal(null,err);
    console.log("Connected correctly to server.");
    method(db, function () {
        db.close();
    });

});
}

module.exports = DB_connection;


