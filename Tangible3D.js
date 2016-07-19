/**
 * Created by souzaalves on 12/05/16.
 */

function Tangible3D (server){
    "use strict";
    console.log('Tangible app Ready!');

    this.utils = {
        http: require('http'),
        express: require('express'),
        nunjucks: require('nunjucks'),
        fs: require('fs'),
        path:require('path'),
        contentTypes: require('./utils/content-types'),
        sysInfo: require('./utils/sys-info'),
        env:process.env,

    };
    let Controller = require(this.utils.path.resolve('back_end/controllers/Controller'));
    let DB = require(this.utils.path.resolve('back_end/DB_connection'));

    this.init = {

        Controller : new Controller(this.utils.path,server,DB)
    }

}
module.exports = Tangible3D;
