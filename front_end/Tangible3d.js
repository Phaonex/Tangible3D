/**
 * Created by souzaalves on 28/06/16.
 */
//var Controller = require('Controller.js');
 function Tangible3d (){
    "use strict";

    console.log('Tangible3d ready!');
    //this.Controller = new Controller();
    //this.Model = new Model();

    this.controller = new Controller(window.location.pathname);

}

var tangible3d = new Tangible3d();




/*form.addEventListener('submit', function(ev) {

    var oOutput = document.querySelector("div"),
        oData = new FormData(form);

    oData.append("CustomField", "This is some extra data");

    var oReq = new XMLHttpRequest();
    oReq.open("POST", "stash.php", true);
    oReq.onload = function(oEvent) {
        if (oReq.status == 200) {
            oOutput.innerHTML = "Uploaded!";
        } else {
            oOutput.innerHTML = "Error " + oReq.status + " occurred when trying to upload your file.<br \/>";
        }
    };

    oReq.send(oData);
    ev.preventDefault();
}, false);*/

window.document.onload = function(){


};

//Tangible3d.model.xhrCom('GET','xmlapp.xml');
Tangible3d.location = window.location.pathname;
var items = [{ title: "foo", id: 1 }, { title: "bar", id: 2}];

