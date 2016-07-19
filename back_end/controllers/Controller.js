/**
 * Created by souzaalves on 11/05/16.
 */
function Controller (path,server,DB){
    "use strict";
    console.log('Controller ready!');


    let Model = require(path.resolve('back_end/models/Model'));
    let Router = require(path.resolve('back_end/routers/Router_Fctrl'));

    this.operation = 'standard';
    this.model = new Model(path,DB);
    this.model.operation = this.operation;


    this.controllers = {
        home : new require('./home_ctrl')(this.model.models.home),
        contact :new require('./contact_ctrl')(this.model.models.contact),
        print : new require('./print_ctrl')(this.model.models.print),
        data : new require('./data_ctrl')(this.model.models.data),
        pay : new require('./pay_ctrl')(this.model.models.pay),
        confirm : new require('./confirm_ctrl')(this.model.models.confirm)
    };

    this.router_fctrl = new Router(server,this.controllers);
    this.router_fctrl.operation = this.operation;

}

module.exports = Controller;