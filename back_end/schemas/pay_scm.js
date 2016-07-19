/**
 * Created by souzaalves on 13/05/16.
 */
function pay_scm(){
    console.log('pay schema ready!');

    return {
        _id: undefined,
        page: 'Pay site',

        card:{
            type: 'diners club',
            card_holder: 'rich the man',
            card_number: 12345,
            expire: {card_month: 10, card_year:2025},
            iban: 'AT132546',
            bic: 15648946
        },
        post_recever:{
            user_data: 'data info'
        }
    };
}
module.exports = pay_scm;
