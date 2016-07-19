/**
 * Created by souzaalves on 13/05/16.
 */
function contact_scm(db, callback){
    console.log('contact schema ready!');

    return {
        _id: undefined,
        page: 'Contact site',

        contact:{
            fullname:'my name is...',
            email: 'your@mail.com',
            subject: 'blabla',
            messenger: 'lalalblalblb lalla and blalbla!'
        },
    };

}
module.exports = contact_scm;
