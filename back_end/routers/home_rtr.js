/**
 * Created by souzaalves on 11/05/16.
 */
function home_rtr(server,controller,operation){
    console.log('home route ready!');
    //console.dir(controller);

    server.get('/', function(req, res) {
        res.render('index.html');
        console.dir(controller);

        return operation = 'not read';

    });

    server.get('/home', function(req, res) {
        res.render('index.html');
        console.dir(operation);

        return operation = 'not read';

    });


//todo: check all the routers lockup function arguments!
    server.post('/api/home/create/:activate/:email', function(req, res) {


        controller.model.results.schema.newsletter.activate = req.params.activate;
        controller.model.results.schema.newsletter.email = req.params.email;

        console.dir(operation);
        console.dir(req.route);
        //console.dir(req.params);
        operation = 'create';
        controller.model.operLockup(operation,'newsletter',controller.model.results.schema);
        res.send(controller.model.results);

       // return operation;

    });
    server.get('/api/home/read', function(req, res) {

        operation = 'read';
        console.dir(operation);
        console.dir();

        controller.model.operLockup(operation,'newsletter',controller.model.results.schema);

        res.send(controller.model.results);


    });
    server.get('/api/home/update', function(req, res) {

        operation = 'update';
        console.dir(operation);

        controller.model.operLockup(operation);
        console.dir(controller);

        rcontroller.model.operLockup(operation,'newsletter',controller.model.results.schema);



    });
    server.post('/api/home/delete', function(req, res) {

        operation = 'delete';

        //console.dir(operation);
        console.dir(operation);

        controller.model.operLockup(operation,'newsletter',controller.model.results.schema);
        console.dir(controller);

        res.send(controller.model.results);


    });


}
module.exports = home_rtr;

