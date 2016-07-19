/**
 * Created by souzaalves on 28/06/16.
 */
function Model(){
    "use strict";
    console.log('Model ready!');

    this.xhrCom = function (type,file,callback){
        var formular = document.querySelector("form");
        var f_data = new FormData(formular);

        //f_data.append('email', document.getElementById('email').value);

        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', callback);
        xhr.open(type, file);
        xhr.send(f_data);
    };
}

localforage.config({
    driver: [localforage.INDEXEDDB,localforage.LOCALSTORAGE,localforage.WEBSQL],
    name: 'Tangible3D',
    storeName: 'user_selects'
});


