/**
 * Created by souzaalves on 11/05/16.
 */

function print_mdl(crud,schema,url,assert,operation){
    console.log('print model ready!');

    //console.dir(model,schema); schema.page ='hallo';

    function operLockup (operation,collection,filter,schema){
        //"use strict";
        let operations = {

            'create': () =>{

                crud.Mongo_client(url, function (err,db) {
                    crud.create(db,collection, schema,function () {
                        console.log(`finish ${operation} ${collection}`);
                        db.close();
                    });

                        crud.makeIndex(db,collection,{'print.user_id': 1},{ unique: true },function () {
                            console.log(`index create at: ${collection}`)
                        })
                    });
                },

            'read': () =>{

                crud.Mongo_client(url,function (err,db) {
                    assert.equal(null,err);
                    console.log("Connected correctly to server.");

                    crud.read(db,collection,filter,function (err,doc) {
                        results.db_res = doc;
                        console.log(`finish ${operation} ${collection} ${doc}`);
                        db.close();

                    });

                })},

            'update':() =>{

                crud.Mongo_client(url, function (err,db) {
                    crud.update(db,collection,{},{schema}, function () {

                        console.log(`finish ${operation} ${collection}`);
                        db.close();
                    })
                })},

            'delete': () => {

                crud.Mongo_client(url, function (err,db) {
                    crud.delete(db,collection,filter, function () {

                        console.log(`finish ${operation} ${collection}`);
                        db.close();
                    })
                })},

            'standard': () =>{
                return 'please chose a standard operations!'
            }

        };

        return (operations[operation] || operations['standard'])()
    }

    var results ={
        operation: operation,
        db_res : '',
        schema: schema
    };

    /*
     opeLockup();
     */

    //console.log(results.db_res);
    //console.log(opeLockup('read'));
    //console.dir(operation);
    //this.operation = 'default';
    //operLockup('standard');

    return {operLockup,results};
}

module.exports = print_mdl;


