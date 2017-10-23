'use strict';

var secondLink = document.getElementsByTagName('a')[1];

function alarm(event) {
    event.preventDefault();
    alert('KLIKNIETO!');
}

secondLink.onlick = alarm;



var thirdLink = document.getElementsByTagName('a')[2];

thirdLink.addEventListener('click', alarm);

thirdLink.removeEventListener('click', alarm);


function klikHeader() {
    console.log('KLIKNALES W HEADER');
}

document.getElementsByTagName('header')[0].addEventListener('click', klikHeader);

//function klikH1(e) {
//    console.log('KLIKNALES W H1');
//
//}

document.getElementsByTagName('h1')[0].addEventListener('click', function(e) {
    e.stopPropagation();
    console.log('KLIKNALES W HAJEDEN');
});