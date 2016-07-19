/**
 * Created by souzaalves on 11/05/16.
 */
function confirm_rtr(server,controller,operation){
    console.log('confirm route ready!');

    server.get('/confirm', function(req, res) {
        res.render('confirm.html');
    });

    //console.dir(controller);

    server.get('/api/confirm/create/:user/:print/:contact/:address/:payments/:total', function(req, res) {

        controller.model.results.schema.print.print_file_options = req.params.print;
        controller.model.results.schema.contact.contact = req.params.contact;
        controller.model.results.schema.contact.address = req.params.address;
        controller.model.results.schema.pay.payment = req.params.pay;
        controller.model.results.schema.total = req.params.total;

        console.dir(operation);
        //console.dir(req.params);
        operation = 'create';
        controller.model.operLockup(operation,'confirm',{},controller.model.results.schema);
        res.send(controller.model.results);

        // return operation;

    });
    server.get('/api/confirm/read', function(req, res) {

        operation = 'read';
        console.dir(operation);
        console.dir();

        controller.model.operLockup(operation,'confirm');

        res.send(controller.model.results);


    });
    server.get('/api/confirm/update/:user/:print/:contact/:address/:payments/:total', function(req, res) {

        controller.model.results.schema.print.print_file_options = req.params.print;
        controller.model.results.schema.contact.contact = req.params.contact;
        controller.model.results.schema.contact.address = req.params.address;
        controller.model.results.schema.pay.payment = req.params.pay;
        controller.model.results.schema.total = req.params.total;

        operation = 'update';
        console.dir(operation);

        controller.model.operLockup(operation,'confirm',{},controller.model.results.schema);
        console.dir(controller);

        res.send(controller.model.results);



    });
    server.get('/api/confirm/delete/:user', function(req, res) {

        operation = 'delete';

        //console.dir(operation);
        console.dir(operation);

        controller.model.operLockup(operation,'confirm');
        console.dir(controller);

        res.send(controller.model.results);


    });
}
module.exports = confirm_rtr;