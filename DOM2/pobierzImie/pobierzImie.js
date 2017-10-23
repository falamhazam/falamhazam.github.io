'use strict';


function pobierzImie(event) {
    event.preventDefault();
    alert('ZABLOKOWANO WYSŁANIE');
    
    var inputy = document.querySelectorAll('input[type=text]');
    
    for(var i = 0; i < inputy.length ; i++ ) {
        console.log(inputy[i].value)
    }
                
}



