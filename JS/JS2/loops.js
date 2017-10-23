"use strict";

for (var i = 20 ; i > 0 ; i--) {
    console.log(i);
}

//for each

var imiona = ["Wojtek", "JakiśLamus", "Krystian"];

imiona.forEach( function(element, index) {
               console.log('Element z indexem: ' + index + " ma wartość: " + element);
}
              )

//while

var it = 0;
while(it < 10) {
    console.log("it: " + it);
    it++;
}

console.log("--------------------------------");

//do while
//
//var j = 0;
//
//do {
//    console.log( "pętla do-while: " + j);
//    j++;
//} while j < 10);

//break

var a = 0;
while (a<10) {
    console.log('break: ' + a);
    a++;
    if(a == 5) {
        break;
    }
}

//przerwanie-continue

for(var i = 0; i < 10; i++) {
    if(i == 5) {
        continue;
    }
    
    console.log("continuee" + i);
}


