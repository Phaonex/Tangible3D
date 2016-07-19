/**
 * Created by souzaalves on 11/05/16.
 */
function data_rtr(server,controller,operation){
    console.log('data route ready!');

    server.get('/data', function(req, res) {
        res.render('data.html');
    });

    server.post('/api/data/create/:name/:last_name/:email/:phone/:street/:city/:zip/:state', function(req, res) {


        controller.model.results.schema.data_user.contact.name = req.params.name;
        controller.model.results.schema.data_user.contact.last_name = req.params.last_name;
        controller.model.results.schema.data_user.contact.email = req.params.email;
        controller.model.results.schema.data_user.contact.phone = req.params.phone;
        controller.model.results.schema.data_user.address.street = req.params.street;
        controller.model.results.schema.data_user.address.city = req.params.city;
        controller.model.results.schema.data_user.address.zip = req.params.zip;
        controller.model.results.schema.data_user.address.state = req.params.city;

        console.dir(operation);
        //console.dir(req.params);
        operation = 'create';
        controller.model.operLockup(operation,'data_user',{},controller.model.results.schema);
        res.send(controller.model.results);

        // return operation;

    });
    server.get('/api/data/read', function(req, res) {

        operation = 'read';
        console.dir(operation);
        console.dir();

        controller.model.operLockup(operation,'data_user', {'data_user.contact.name':'name'},controller.model.results.schema);

        res.send(controller.model.results);


    });
    //todo: update not working: cause not founded!
    server.get('/api/data/update/:user/:name/:last_name/:email/:phone/:street/:city/:zip/:state', function(req, res) {

        controller.model.results.schema.data_user.contact.name = req.params.name;
        controller.model.results.schema.data_user.contact.last_name = req.params.last_name;
        controller.model.results.schema.data_user.contact.email = req.params.email;
        controller.model.results.schema.data_user.contact.phone = req.params.phone;
        controller.model.results.schema.data_user.address.street = req.params.street;
        controller.model.results.schema.data_user.address.city = req.params.city;
        controller.model.results.schema.data_user.address.zip = req.params.zip;
        controller.model.results.schema.data_user.address.state = req.params.city;

        operation = 'update';
        console.dir(operation);

        controller.model.operLockup(operation,'data_user',{},controller.model.results.schema);
        console.dir(controller);

        res.send(controller.model.results);

    });

    server.get('/api/data/delete', function(req, res) {

        operation = 'delete';

        //console.dir(operation);
        console.dir(operation);

        controller.model.operLockup(operation,'data_user',controller.model.results.schema);
        console.dir(controller);

        res.send(controller.model.results);

    });
}
module.exports = data_rtr;