/**
 * Created by souzaalves on 11/05/16.
 */

function upload_mdl(crud,schema,url,assert,operation){
    console.log('upload model ready!');

    //console.dir(model,schema); schema.page ='hallo';

    function operLockup (operation,filter){
        //"use strict";
        let operations = {

            'create': () =>{

                crud.Mongo_client(url, function (err,db) {
                    crud.create(db,'newsletter', filter,function () {
                        console.log(`finish ${operation} newsletter`);
                        db.close();
                    })
                })},

            'read': () =>{

                crud.Mongo_client(url,function (err,db) {
                    assert.equal(null,err);
                    console.log("Connected correctly to server.");

                    crud.read(db,'newsletter',{},function (err,doc) {
                        results.db_res = doc;
                        console.log(`finish ${operation} newsletter ${doc}`);
                        db.close();

                    });

                })},

            'update':() =>{

                crud.Mongo_client(url, function (err,db) {
                    crud.update(db,'newsletter',{},{newsletter: {activate: false, email: 'phaonex@aol.com'}}, function () {

                        console.log(`finish ${operation} newsletter`);
                        db.close();
                    })
                })},

            'delete': () => {

                crud.Mongo_client(url, function (err,db) {
                    crud.delete(db,'newsletter',{newsletter: {activate: true, email : "your@email.com"}}, function () {

                        console.log(`finish ${operation} newsletter`);
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


module.exports = upload_mdl;

