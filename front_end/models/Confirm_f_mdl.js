/**
 * Created by souzaalves on 04/07/16.
 */
function Confirm_f_mdl(model){
    "use strict";
    console.log('confirm mdl ready!');
    var formular = document.querySelector("form");
    var ul= document.createElement('ul');
    formular.appendChild(ul);
    var ul = formular.getElementsByTagName('ul').item(0);
    var api_url = ['/api/print/read/user_id/304u29ms4i','/api/data/read', '/api/pay/read'];


   /* model.xhrCom('GET',api_url[0], function callback () {
        var res = JSON.parse(this.response);

        res.db_res.forEach(function (e,i) {
            //console.log(e.print);
            var li = document.createElement('li');
            ul.appendChild(li).textContent = "File: "+ e.print.file+" Color: "+ e.print.color+" Quality: "+e.print.quality+" Shipping: "+e.print.shipping;

        });

    });

    model.xhrCom('GET',api_url[1], function callback () {
        var res = JSON.parse(this.response);

        res.db_res.forEach(function (e,i) {
            console.log(e.data_user);
            var li = document.createElement('li');
            ul.appendChild(li).textContent = "Name: "+ e.data_user.contact.name+" Last Name: "+ e.data_user.contact.last_name+" Email: "+e.data_user.contact.email
                +" Phone: "+ e.data_user.contact.phone+" City: "+ e.data_user.address.city+" State: "+ e.data_user.address.state+" Street: "+ e.data_user.address.street
                +" Zip: "+ e.data_user.address.zip;

        })
    });*/
// IndexDB start!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// This is what our customer data looks like.

    model.xhrCom('GET',api_url[0], function callback () {


    });

    model.xhrCom('GET',api_url[1], function callback () {
        var res = JSON.parse(this.response);

        var data = res.db_res;
        console.log(data);

        });

    model.xhrCom('GET',api_url[2], function callback () {
        var res = JSON.parse(this.response);

        var payment = res.db_res;
        console.log(payment);


        });


// IndexDB end!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




    model.xhrCom('GET',api_url[2], function callback () {
        var res = JSON.parse(this.response);

        res.db_res.forEach(function (e,i) {
            console.log(e.card);
            var li = document.createElement('li');

            //todo type: bug, priority: low. the data displayed does not correspond with the Schema!
            ul.appendChild(li).textContent = "Payed with: "+ e.card.type+" Holder: "+e.card.card_holder+" Number: "+ e.card.card_number+" Expire on: "+e.card.expire.card_month
                +" at the Year: "+e.card.expire.card_year+" IBAN: "+
                e.card.iban+" BIC: "+ e.card.bic+" Post recever: "+ e.post_recever;

        })
    });

    //todo: create router like querys methods for cruds


}

