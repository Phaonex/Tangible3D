"use strict";
const express = require('express'),server = express(),Mongoclient = require('mongodb').MongoClient,
contentTypes = require('./utils/content-types'),
    sysInfo      = require('./utils/sys-info'),
    env          = process.env;

let Tangible3D = require('./Tangible3D');

let Tangible3d = new Tangible3D(server);
module.exports.server = server;

var njglobals = require('nunjucks/src/globals');
njglobals.someVar = 'someValue';
//console.log(Tangible3d.init.Router_Fctrl);

server.use(Tangible3d.utils.express.static('front_end/public'));
server.use(Tangible3d.utils.express.static('front_end'));
//todo: i just comment the Mongoclient middleware becouse i think he is cousing the model methods
/*server.use(function(req,res,next){
    req.db = Tangible3d.init.Controller.model.crud.Mongo_client;
    next();

});*/

Tangible3d.utils.nunjucks.configure('front_end/views', {
  autoescape: true,
  express: server,

});

server.get('/', function(req, res) {
    res.render('index.html');

});

server.get('/home', function(req, res) {
    res.render('index.html');

});

server.get('/contact', function(req, res) {
    res.render('contact.html');

});

server.get('/upload', function(req, res) {
    res.render('upload.html');

});

server.listen(Tangible3d.utils.env.NODE_PORT || 3000,Tangible3d.utils.env.NODE_IP || 'localhost', function () {
    console.log(`Application worker ${process.pid} started...`);
});