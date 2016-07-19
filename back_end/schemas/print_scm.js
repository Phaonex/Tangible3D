/**
 * Created by souzaalves on 13/05/16.
 */
function print_scm(){
    console.log('print schema ready!');

    return {
        _id: undefined,
        page: 'Print site',
        print:{
            user_id:'randomAphaNumeric',
            file:'megamodel.x3d',
            amount:{quantity: 4, more:5},
            color:'red',
            quality: 'height',
            shipping: 'now!'
        }
    };

}
module.exports = print_scm;
