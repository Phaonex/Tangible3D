/**
 * Created by souzaalves on 11/05/16.
 */
function Schema (path,server){
    "use strict";
    console.log('Schema ready!');

    this.schemas = {
        home : new require('./home_scm')(),
        contact : new require('./contact_scm')(),
        print :new require('./print_scm')(),
        data :  new require('./data_scm')(),
        pay : new require ('./pay_scm')(),
        confirm : new require('./confirm_scm')()
    };

}

module .exports = Schema;