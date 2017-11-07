//forEach
//for
//while
//do..while


var tablica = [4, 5, 10, 12, 14];

//for (var i = 0; i < tablica.length; i++) {
//    console.log(tablica[i]);
//}
//
//
//tablica.forEach(function (element, index) {
//    console.log('nowa: ' + element)
//});

var i = 0;
//while (i < tablica.length) {
//    console.log(tablica[i]);
//    i++;
//}

var zmienna = true;

while (zmienna) {
    if (tablica[i] % 2 == 1) {
        zmienna = false;

    } else {
        console.log(tablica[i]);
    }

    i++;
}
