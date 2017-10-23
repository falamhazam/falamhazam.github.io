'use strict';

var imiona = ['Wojtek', 'Tomasz', 'Julia'];

console.log(imiona)

imiona[3] = "Ola";

console.log(imiona);



var ileElementow = imiona.push("Maria");

console.log(imiona);

console.log(ileElementow);

var ostatniElement = imiona.pop();

console.log(imiona);

console.log(ostatniElement);

console.log("ile elementów w tablicy: " + imiona.length)

console.log(imiona.join(" i "));

imiona.sort();

console.log(imiona);