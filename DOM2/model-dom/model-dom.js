"use strict"

var parFirst = document.getElementById("parFirst");

console.log(parFirst);

var link = document.getElementsByClassName("link");

console.log(link);

var paragrafyPoTagu = document.getElementsByTagName("p");

console.log(paragrafyPoTagu);

var wszystkieLinki = document.querySelectorAll(".link");

console.log(wszystkieLinki);

var jedenLink = document.querySelector(".link");

console.log(jedenLink);

wszystkieLinki.forEach(function(link, index){
    console.log(link.outerHTML);
})

wszystkieLinki.forEach(function(link, index){
    console.log(link.innerHTML);
})

