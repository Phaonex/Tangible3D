/**
 * Created by souzaalves on 13/05/16.
 */
function home_scm(ObjectId){
    console.log('home schema ready!');

    return {
        _id: undefined,
        page: 'Home site',
        newsletter: {activate: true, email: 'your@email.com'}

    }

}
module.exports = home_scm;
