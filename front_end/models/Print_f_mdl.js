/**
 * Created by souzaalves on 30/06/16.
 */
function Print_f_mdl(model){
    "use strict";
    console.log('print mdl ready!');

    var data_file = null;
    var upload_input = document.querySelector('input[type=file]'), inline = document.querySelector('x3d').firstElementChild.firstElementChild;

    function previewFile() {
        var preview = document.querySelector('.logo'), file = document.querySelector('input[type=file]').files[0], fileliste = document.querySelector('.fileList'),
            delbtn = document.querySelectorAll('[name="delet"]');
        var reader  = new FileReader();

        reader.addEventListener("load", function (e) {

            data_file = this.result.toString().replace(/\//g,'%2F');
            fileliste.firstElementChild.innerText = 'Name: '+ file.name +' Size: '+ file.size;
            inline.setAttribute('url', this.result);
            preview.src = this.result;
            console.log(data_file);
            e.preventDefault();
        }, false);


        if (file) {
            reader.readAsDataURL(file);

        }

        if(file.size >= 45002){


            alert('You data is to big at the moment we only support data with a maximal of 45kb.' +
                'Please select a model with 45kb or less!');
            window.location.reload()

        }

        delbtn[0].addEventListener('click', function(e){
            console.log(e);
            fileliste.firstElementChild.innerText = 'upload your 3d model of X3D format!';
            inline.setAttribute('url', '/public/img/tangible3d.x3d');

        })

    }
    upload_input.addEventListener('change',previewFile);

    var formular = document.querySelector("form");
    formular.addEventListener('submit',function(ev){
        "use strict";



        var amount,color,quality,shipping = undefined;
        var amout = document.querySelectorAll('[name="quant"]'), col = document.querySelectorAll('[name="color"]'),qual = document.querySelectorAll('[name="quality"]'),
            ship = document.querySelectorAll('[name="shipping"]');



        function getingChekedVal(){

            var amounts = Array.from(amout);
            var colors = Array.from(col);
            var qualitys = Array.from(qual);
            var shippings = Array.from(ship);

            amounts.forEach(function(ele,idx,arr){
                if(amounts[idx].checked){
                    amount = amounts[idx].value;
                }
            });

            colors.forEach(function(ele,idx,arr){
                if(colors[idx].checked){
                    color = colors[idx].value;
                }
            });

            qualitys.forEach(function(ele,idx,arr){
                if(qualitys[idx].checked){
                    quality = qualitys[idx].value;
                }
            });

            shippings.forEach(function(ele,idx,arr){
                if(shippings[idx].checked){
                    shipping = shippings[idx].value;
                }
            });
        }



        getingChekedVal();
        //var data_file_str = data_file.toString().replace(/\//g,'%2F');
        //console.log(data_file_str);



        var api_url = '/api/print/create/:user/'+ amount +'/'+ color +'/'+ quality +'/'+shipping+'/'+data_file+'';
        console.log(api_url);





        var print = {'user_id':Math.random().toString(36).substring(7),'amount':amount,'color':color,'quality':quality,'shipping':shipping,'data_file':data_file};


        var UNKNOWN_KEY = 'unknown_key';

        localforage.setItem('print', print, function() {
            console.log('Saved: ' + print);

            localforage.getItem('print', function(err, readValue) {
                console.log('Read: ', readValue);
            });
            window.location.replace('/data');
        });

        /*
        model.xhrCom('POST',api_url, function callback () {
            console.log(this);
            var print_optins = {'amount':amount,'color':color,'quality':quality,'shipping':shipping,'file':data_file};
        window.localStorage.setItem('print',JSON.stringify(print_optins));


            window.location.replace('/data');


        });*/
        ev.preventDefault();


    });



    //todo: it only send 45k data over the url!
    //todo: create router like querys methods for cruds
}