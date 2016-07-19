/**
 * Created by souzaalves on 04/07/16.
 */
function Pay_f_mdl(model){
    "use strict";
    console.log('pay mdl ready!');

    var formular = document.querySelector("form");
    formular.addEventListener('submit',function(ev){
        "use strict";

        var selected_card = document.querySelectorAll('[name="select_card"]'), card_holder =  undefined, card_number = undefined, card_month = undefined,
            card_year = undefined, iban = (document.querySelector('[name="iban"]').value) ? document.querySelector('[name="iban"]').value : undefined,
            bic = (document.querySelector('[name="bic"]').value) ? document.querySelector('[name="bic"]').value : undefined, user_data = undefined;

        var card_selectar = Array.from(selected_card);

        card_selectar.forEach(function(ele,idx,arr){
            if(card_selectar[idx].checked){
                selected_card = card_selectar[idx].value;

            }});

        function ChekedValLokup(selected_card){

                var types = {

                    'Visa_card': function(){

                        //console.log(document.querySelector('[name="card_holder_'+selected_card+'"]').value);
                        card_holder = document.querySelector('[name="card_holder_'+selected_card+'"]').value;
                        card_number = document.querySelector('[name="card_number_'+selected_card+'"]').value;
                        card_month = document.querySelector('[name="card_month_'+selected_card+'"]').value;
                        card_year = document.querySelector('[name="card_year_'+selected_card+'"]').value;
                    },

                    'Master_card': function(){

                        //console.log(document.querySelector('[name="card_holder_'+selected_card+'"]').value);
                        card_holder = document.querySelector('[name="card_holder_'+selected_card+'"]').value;
                        card_number = document.querySelector('[name="card_number_'+selected_card+'"]').value;
                        card_month = document.querySelector('[name="card_month_'+selected_card+'"]').value;
                        card_year = document.querySelector('[name="card_year_'+selected_card+'"]').value;

                    },

                    'Electro_cash': function(){

                        //console.log(document.querySelector('[name="card_holder_'+selected_card+'"]').value);
                        card_holder = document.querySelector('[name="card_holder_'+selected_card+'"]').value;
                        card_month = document.querySelector('[name="card_month_'+selected_card+'"]').value;
                        card_year = document.querySelector('[name="card_year_'+selected_card+'"]').value;

                    },

                    'standard': function(){
                        return 'please chose a standard card type!'
                    }

                };

                return (types[selected_card] || types['standard'])()


        }

        ChekedValLokup(selected_card);
        var pay_opt = {'selected_card':selected_card,'card_holder':card_holder,'card_number':card_number,'card_month':card_month,'card_year':card_year, 'iban': iban, 'bic': bic, 'user_data':user_data};

        localforage.setItem('pay', pay_opt, function() {
            console.log('Saved: ' + pay_opt);

            localforage.getItem('pay', function(err, readValue) {
                console.log('Read: ', readValue);
            });
            window.location.replace('/confirm');
        });

       /* var api_url = '/api/pay/create/'+selected_card+'/'+card_holder+'/'+card_number+'/'+card_month+'/'+card_year+'/'+iban+'/'+bic+'/'+user_data+'';
        model.xhrCom('POST',api_url, function callback () {
            console.log(JSON.parse(this.response));
            window.location.replace('/confirm');
        });
        var pay_opt = {'selected_card':selected_card,'card_holder':card_holder,'card_number':card_number,'card_month':card_month,'card_year':card_year, 'iban': iban, 'bic': bic, 'user_data':user_data};
        window.localStorage.setItem('pay_opt',JSON.stringify(pay_opt));*/
        ev.preventDefault();
    });


    //todo: create router like querys methods for cruds
}