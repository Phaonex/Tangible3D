/**
 * Created by souzaalves on 11/05/16.
 */
function upload_rtr(server,controller){
    console.log('upload route ready!');

    server.get('/upload', function(req, res) {
        res.render('upload.html');
    });

    server.get('/api/upload', function(req, res) {
        res.send(controller);
        console.dir(controller);
        //console.dir(req.db);
    });

    return controller
}
module.exports = upload_rtr;
