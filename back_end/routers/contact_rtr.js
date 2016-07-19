/**
 * Created by souzaalves on 11/05/16.
 */
function contact_rtr(server,controller,operation){
    console.log('contact route ready!');
    server.get('/contact', function(req, res) {
        res.render('contact.html');
    });

    //console.dir(controller);
    server.post('/api/contact/create/:fullname/:email/:subject/:messenger', function(req, res) {


        controller.model.results.schema.contact.fullname = req.params.fullname;
        controller.model.results.schema.contact.email = req.params.email;
        controller.model.results.schema.contact.subject = req.params.subject;
        controller.model.results.schema.contact.messenger = req.params.messenger;

        console.dir(operation);
        //console.dir(req.params);
        operation = 'create';
        controller.model.operLockup(operation,'contact',controller.model.results.schema);
        res.send(controller.model.results);

        // return operation;

    });
    server.get('/api/contact/read', function(req, res) {

        operation = 'read';
        console.dir(operation);
        console.dir();

        controller.model.operLockup(operation,'contact');

        res.send(controller.model.results);


    });
    server.get('/api/contact/update/:filter/:fullname/:email/:subject/:messenger', function(req, res) {

        controller.model.results.schema.contact.fullname = req.params.fullname;
        controller.model.results.schema.contact.email = req.params.email;
        controller.model.results.schema.contact.subject = req.params.subject;
        controller.model.results.schema.contact.messenger = req.params.messenger;

        operation = 'update';
        console.dir(operation);

        controller.model.operLockup(operation,'contact',{},controller.model.results.schema);
        console.dir(controller);

        res.send(controller.model.results);

    });
    server.get('/api/contact/delete/:email', function(req, res) {

        controller.model.results.schema.contact.email = req.params.email;

        operation = 'delete';

        //console.dir(operation);
        console.dir(operation);

        controller.model.operLockup(operation,'contact',{});
        console.dir(controller);
        console.dir(controller.model.results.schema);

        res.send(controller.model.results);


    });
}
module.exports = contact_rtr;