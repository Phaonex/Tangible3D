/**
 * Created by souzaalves on 13/05/16.
 */
function data_scm(){
    console.log('data schema ready!');

    return {
        _id: undefined,
        page: 'Data site',

        data_user:{

            contact:
            {
                name: 'my name here',
                last_name: 'my name here',
                email: 'your@mail.com',
                phone: 1234567890
            },

            address:
            {
                street:'50 avenue 1',
                city: 'Vienna',
                zip: 198765,
                state: 'Vienna'

            }

        }
    };

}

module.exports = data_scm;
