/**
 * Created by souzaalves on 28/06/16.
 */
function Home_f_mdl(model){
    "use strict";
    console.log('home mdl ready!');
    var formular = document.querySelector("form");
    formular.addEventListener('submit',function(ev){
        "use strict";

        var api_url = `/api/home/create/true/${document.getElementById('email').value}`;
        model.xhrCom('POST',api_url, function callback () {
            console.log(this);
        });
        ev.preventDefault();
    });
//

    //todo: create router like querys methods for cruds
}