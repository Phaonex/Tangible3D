/**
 * Created by souzaalves on 30/06/16.
 */
function Contact_f_mdl(model){
    "use strict";
    console.log('contact mdl ready!');

    var formular = document.querySelector("form");
    formular.addEventListener('submit',function(ev){
        "use strict";

        var api_url = `/api/contact/create/${document.getElementById('full_name').value}/${document.getElementById('email').value}/${document.getElementById('subject').value}/${document.getElementById('messenger').value}`;
        model.xhrCom('POST',api_url, function callback () {
            console.log(this);
        });
        ev.preventDefault();
    });


    //todo: create router like querys methods for cruds
}