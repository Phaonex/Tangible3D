/**
 * Created by souzaalves on 28/06/16.
 */
function Controller(pathCtrl){
    "use strict";
    console.log('Controller ready');
    this.model = new Model();

    this.model.models = {};
    this.controllers = {};

    var items = [{ title: "foo", id: 1 }, { title: "bar", id: 2}];
    function ojbInitLockup (pathCtrl, controllers,model){
        //"use strict";
        var controls = {

            /* todo: ERROR: Unexpected token on safari
            '/': () =>{

                controllers.home = new home_f_ctrl(model)
            },*/

            '/home': function(){
                model.models.home = Home_f_mdl;
                controllers.home = new Home_f_ctrl(model,model.models.home)
            },

            '/contact': function(){
                model.models.contact = Contact_f_mdl;
                controllers.contact = new Contact_f_ctrl(model,model.models.contact)
               },

            '/upload': function(){
                model.models.print = Print_f_mdl;
                controllers.print = new Print_f_ctrl(model,model.models.print)
                },

            '/data': function(){
                model.models.data = Data_f_mdl;
                controllers.data = new Data_f_ctrl(model,model.models.data)
            },

            '/pay_opt': function(){
                model.models.pay = Pay_f_mdl;
                controllers.pay = new Pay_f_ctrl(model,model.models.pay)
            },

            '/confirm': function(){
                model.models.confirm = Confirm_f_mdl;
                controllers.confirm = new Confirm_f_ctrl(model,model.models.confirm);

            },

            'standard': function(){
                return 'please chose a standard operations!'
            }

        };

        return (controls[pathCtrl] || controls['standard'])()
    }

    ojbInitLockup(pathCtrl,this.controllers,this.model);


}


