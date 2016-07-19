/**
 * Created by souzaalves on 11/05/16.
 */
function print_rtr(server,controller,operation){
    console.log('print route ready!');

    server.get('/upload', function(req, res) {
        res.render('upload.html');
    });

    server.post('/api/print/create/:user/:amount/:color/:quality/:shipping/:file', function(req, res) {

        //controller.model.results.schema.print.use = req.params.user;
        controller.model.results.schema.print.file = req.params.file;
        controller.model.results.schema.print.amount = req.params.amount;
        controller.model.results.schema.print.color = req.params.color;
        controller.model.results.schema.print.quality = req.params.quality;
        controller.model.results.schema.print.shipping = req.params.shipping;
        controller.model.results.schema.print.user_id = Math.random().toString(36).substring(7);

        console.dir(operation);
        //console.dir(req.params);
        operation = 'create';
        controller.model.operLockup(operation,'print',{},controller.model.results.schema);
        res.send(controller.model.results);

        // return operation;

    });
    //todo all the other read routers method need the below update!
    server.get('/api/print/read/:property/:value', function(req, res) {

        operation = 'read';
        console.dir(operation);
        console.dir();
        //'print.user_id': 'sojy43ac3di'
        let print= `print.${req.params.property}`;
       let test = {};

        test[print] = req.params.value;

        controller.model.operLockup(operation,'print', test,controller.model.results.schema);

        res.send(controller.model.results);


    });
    server.get('/api/print/update/:user/:file/:amount/:color/:quality/:shipping', function(req, res) {

        controller.model.results.schema.print.use = req.params.user;
        controller.model.results.schema.print.file = req.params.file;
        controller.model.results.schema.print.amount = req.params.amount;
        controller.model.results.schema.print.color = req.params.color;
        controller.model.results.schema.print.quality = req.params.quality;
        controller.model.results.schema.print.shipping = req.params.shipping;

        operation = 'update';
        console.dir(operation);

        controller.model.operLockup(operation,'print',{},controller.model.results.schema);
        console.dir(controller);

        res.send(controller.model.results);



    });
    server.post('/api/print/delete/:user/:file', function(req, res) {

        operation = 'delete';

        //console.dir(operation);
        console.dir(operation);

        controller.model.operLockup(operation,'print');
        console.dir(controller);

        res.send(controller.model.results);


    });
}
module.exports = print_rtr;