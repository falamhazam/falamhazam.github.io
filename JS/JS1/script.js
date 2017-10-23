'use strict';

var imie= "Tomasz";
var wiek= 25;
var nazwiskoTomka= "Zygmunt";

console.log(imie);
console.log(wiek);
console.log(nazwiskoTomka);


function wyswietlZmienna(){
    var imie= "Julia"
    console.log(imie);
}

var wyswietlWiek = function() {
    console.log(wiek);
}

wyswietlZmienna();
wyswietlWiek();

function mnozenie(parametr1, parametr2) {
    var wynik = parametr1 * parametr2;
    console.log("Wynik: " + wynik);
    
    return wynik;
}

mnozenie(4, 5);
mnozenie(5, 10);

var wynikMnozenia = mnozenie(2, 4);
console.log("wynik mnozenia: " + wynikMnozenia);