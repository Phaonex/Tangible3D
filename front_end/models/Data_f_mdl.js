/**
 * Created by souzaalves on 04/07/16.
 */
function Data_f_mdl(model){
    "use strict";
    console.log('data mdl ready!');

    var formular = document.querySelector("form");
    formular.addEventListener('submit',function(ev){
        "use strict";


        var name = document.querySelector('[name="name"]').value, last_name = document.querySelector('[name="last_name"]').value,email = document.querySelector('[name="email"]').value,
            phone = document.querySelector('[name="phone"]').value, street = document.querySelector('[name="street"]').value,city = document.querySelector('[name="city"]').value,
            zip = document.querySelector('[name="zip"]').value,state = document.querySelector('[name="state"]').value;


        var data_info = {'name':name,'last_name':last_name,'email':email,'phone':phone,'street':street, 'city': city, 'zip': zip, 'state':state};


        localforage.setItem('data', data_info, function() {
            console.log('Saved: ' + data_info);

            localforage.getItem('data', function(err, readValue) {
                console.log('Read: ', readValue);
            });

            // Since this key hasn't been set yet, we'll get a null value
            window.location.replace('/pay_opt');

        });

        /*var api_url = '/api/data/create/'+name+'/'+last_name+'/'+email+'/'+phone+'/'+street+'/'+city+'/'+zip+'/'+state+'';
        model.xhrCom('POST',api_url, function callback () {
            console.log(this);
            window.location.replace('/pay_opt');
        });

        var data_info = {'name':name,'last_name':last_name,'email':email,'phone':phone,'street':street, 'city': city, 'zip': zip, 'state':state};
        window.localStorage.setItem('data_info',JSON.stringify(data_info));
        */
        ev.preventDefault();
    });


    //todo: create router like querys methods for cruds
}