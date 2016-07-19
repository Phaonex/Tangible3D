/**
 * Created by souzaalves on 11/05/16.
 */
function pay_rtr(server,controller,operation){
    console.log('pay route ready!');

    server.get('/pay_opt', function(req, res) {
        res.render('pay_opt.html');
    });

    server.post('/api/pay/create/:type/:card_holder/:card_number/:card_month/:card_year/:iban/:bic/:user_data', function(req, res) {


        controller.model.results.schema.card.type = req.params.type;
        controller.model.results.schema.card.card_holder = req.params.card_holder;
        controller.model.results.schema.card.card_number = req.params.card_number;
        controller.model.results.schema.card.expire.card_month = req.params.card_month;
        controller.model.results.schema.card.expire.card_year = req.params.card_year;
        controller.model.results.schema.card.iban = req.params.iban;
        controller.model.results.schema.card.bic = req.params.bic;
        controller.model.results.schema.post_recever.user_data = req.params.user_data;


        console.dir(operation);
        //console.dir(req.params);
        operation = 'create';
        controller.model.operLockup(operation,'pay',{},controller.model.results.schema);
        res.send(controller.model.results);

        // return operation;

    });
    server.get('/api/pay/read', function(req, res) {

        operation = 'read';
        console.dir(operation);
        console.dir();

        controller.model.operLockup(operation,'pay');

        res.send(controller.model.results);


    });
    server.get('/api/pay/update/:type/:card_holder/:card_number/:card_month/:card_year/:iban/:bic/:user_data', function(req, res) {

        controller.model.results.schema.card.type = req.params.type;
        controller.model.results.schema.card.card_holder = req.params.card_holder;
        controller.model.results.schema.card.card_number = req.params.card_number;
        controller.model.results.schema.card.expire.card_month = req.params.card_month;
        controller.model.results.schema.card.expire.card_year = req.params.card_year;
        controller.model.results.schema.card.iban = req.params.iban;
        controller.model.results.schema.card.bic = req.params.bic;
        controller.model.results.schema.post_recever.user_data = req.params.user_data;

        operation = 'update';
        console.dir(operation);

        controller.model.operLockup(operation,'pay',{},controller.model.results.schema);
        console.dir(controller);

        res.send(controller.model.results);



    });
    server.post('/api/pay/delete/:user_data/:card/:posta', function(req, res) {

        operation = 'delete';

        //console.dir(operation);
        console.dir(operation);

        controller.model.operLockup(operation,'pay',{});
        console.dir(controller);

        res.send(controller.model.results);


    });
}
module.exports = pay_rtr;