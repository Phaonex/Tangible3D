/**
 * Created by souzaalves on 13/05/16.
 */
function confirm_scm(){
    console.log('confirm schema ready!');

    return {
        _id: undefined,
        page: 'Confirm site',

        print:{
            print_file_options: ['print.file, print.amount, print.color, print.quality, print.shipping']
        },
        contact:{
            contact: ['data.contact'],
            address: ['data.address']
        },
        pay:{
            payment: ['pay.card or post_recever']
        },

        total: 1000.000



    };
}
module.exports = confirm_scm;
