"use strict";

var jsonOsoby = {
    "osoby": [
        {
            imie: "Krystian",
            nazwisko: "Dziopa",
            wzrost: 180,
            zainteresowania: [
                {nazwa: "podróże"},
                {nazwa: "gotowanie"}
            ]
        },
        {
            imie: "Domin",
            nazwisko: "Dziupa",
            wzrost: 170,
            zainteresowania: [
                {nazwa: "piła"},
                {nazwa: "tv"}
            ]
        },
        {
            imie: "Klaudia",
            nazwisko: "Dziepa",
            wzrost: 160,
            zainteresowania: [
                {nazwa: "komputery"},
                {nazwa: "gotowanie"},
                {nazwa: "formula1"}
            ]
        }
    ]
}

console.log(jsonOsoby);

//console.log(jsonOsoby.osoby[0].imie);


jsonOsoby.osoby.forEach(function(element,index){
    console.log(element.imie)
});

