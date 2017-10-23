"use strict"

function wspak(x) {
    var result = x.split("");
    result.reverse();
    return result.join(" ");
}

var text = "Akademia108";
var drugi = "TAKIETAM";



console.log(wspak(text));
console.log(wspak(drugi));
