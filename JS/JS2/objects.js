'use strict'

var osoba = {
    name: "Julia", //do tej wlasciwosci
    height: 160,
    przedstawOsobe: function() {
        console.log(this.name);  //odwolujac sie do wlasciwosci z wnetrza trzeba poprzedzic this.
    }

}

console.log(osoba.name);
console.log(osoba["name"]);

osoba.przedstawOsobe();

osoba.nazwisko = "Potocki";
console.log(osoba.name + osoba.nazwisko);

console.log(osoba);