/**
 * Created by souzaalves on 11/05/16.
 */

function Model (path,server){
    "use strict";
    console.log('Models ready!');
    var path = require('path');

    var Schema = require(path.resolve('back_end/schemas/Schema')),Mongoclient = require('mongodb').MongoClient,
        assert = require('assert'), url = 'mongodb://localhost:27017/tangible3d',
        ObjectId = require('mongodb').ObjectID;

    this.id = ObjectId;
    this.schema = new Schema(path,server);

    this.crud = {

    create : (db,collection,filters,callback) => {
            db.collection(collection).insert( filters, function(err, result) {
                assert.equal(null,err);
                console.log(`Insert a document into the Tangible3D collection:${collection}`);
                callback();
            });

    },

    update :(db,collection,filters,schema,callback) => {
        db.collection(collection).updateOne(
            filters,
            {
                $set: schema,
                $currentDate: {lastModified: true}
            }, function (err,results) {
                console.log(`Updated a document into the Tangible3D collection:${collection}`);
                callback();

            }
        )
    },

     read:(db,collection,filters,callback) => {
        var cursor = db.collection(collection).find(filters);
        /* toArray(function(err,doc){

             console.dir(doc);

         });*/
         console.dir(filters);
         var items = [];

        cursor.each(function(err,doc){
            assert.equal(err,null);

            if (doc != null){
                //console.dir(doc);
                items.push(doc);
                console.log(`Read a document into the Tangible3D collection:${collection} filter: ${filters}`);
            }
            else {
                callback(err,items);
            }

        });

        return items
     },

    replace : (db,collection,filters,replacer,callback) => {
        db.collection(collection).replaceOne(

            filters, replacer,
            function(err, results) {
                console.log(results);
                console.log(`Replace a document into the Tangible3D collection:${collection}`);
                callback();
            });
    },

    delete : (db,collection,filters,callback) => {
        db.collection(collection).deleteOne(
            filters,

            function(err,results){
                console.log(results.results);
                console.log(`Deleted a document into the Tangible3D collection:${collection}`);
                callback();
            }
        )
    },
      makeIndex: (db,collection,filters,options,callback) => {
            db.collection(collection).createIndex(filters, {unique:false},
                function (err, results) {
                    console.log(`makeIndex a document into the Tangible3D collection:${collection}`);
                    console.log(results);
                    callback();
                }
            )
      },

    Mongo_client : Mongoclient.connect

};

    this.models = {
        home : new require('./home_mdl')(this.crud,this.schema.schemas.home,url,assert,this.operation),
        contact : new require('./contact_mdl')(this.crud,this.schema.schemas.contact,url,assert,this.operation),
        print : new require('./print_mdl')(this.crud,this.schema.schemas.print,url,assert,this.operation),
        data :  new require('./data_mdl')(this.crud,this.schema.schemas.data,url,assert,this.operation),
        pay :  new require('./pay_mdl')(this.crud,this.schema.schemas.pay,url,assert,this.operation),
        confirm : new require('./confirm_mdl')(this.crud,this.schema.schemas.confirm,url,assert,this.operation)
    };

}
//console.log(Tangible3D.Router.routes.confirm);
module.exports = Model;