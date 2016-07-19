/**
 * Created by souzaalves on 11/05/16.
 */

function Router_Fctrl (server,controllers){
    "use strict";
    console.log('Router ready!');

    this.routes = {
        home : new require('./home_rtr')(server,controllers.home,this.operation),
        contact : new require('./contact_rtr')(server,controllers.contact,this.operation),
        print : new require('./print_rtr')(server,controllers.print,this.operation),
        data : new require('./data_rtr')(server,controllers.data,this.operation),
        pay : new require ('./pay_rtr')(server,controllers.pay,this.operation),
        confirm : new require('./confirm_rtr')(server,controllers.confirm,this.operation)
    };

    //this.routes.home_ctrl = this.Controller.controllers.home;

}
module.exports = Router_Fctrl;






