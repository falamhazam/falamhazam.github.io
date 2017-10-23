'use strict';

function ustawTlo() {

    for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
        if (i % 2 == 0) {
            document.getElementsByTagName('p')[i].style.background = 'yellow'
        } else {
            document.getElementsByTagName('p')[i].style.background = 'red'

        }
    }
    document.getElementById('button').innerHTML = "WYKASUJ TŁO";
    document.getElementById('button').removeEventListener('click', ustawTlo);
    document.getElementById('button').addEventListener('click', zeruj);
    
}

function zeruj() {
    for(var i = 0; i < document.getElementsByTagName('p').length; i++ ) {
        document.getElementsByTagName('p')[i].style.background = "";
    }
    document.getElementById('button').innerHTML = "ZMIENIAJ";
    document.getElementById('button').removeEventListener('click', zeruj);
    document.getElementById('button').addEventListener('click', ustawTlo);
}

document.getElementById('button').addEventListener('click', ustawTlo);
