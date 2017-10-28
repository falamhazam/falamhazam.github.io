'use strict';


//start przyciski numerow
document.getElementById('number1').addEventListener('click' , function() {
    document.getElementById('pole').value = document.getElementById('pole').value + '1';
});

document.getElementById('number2').addEventListener('click' , function() {
    document.getElementById('pole').value = document.getElementById('pole').value +'2';
});

document.getElementById('number3').addEventListener('click' , function() {
    document.getElementById('pole').value = document.getElementById('pole').value +'3';
});

document.getElementById('number4').addEventListener('click' , function() {
    document.getElementById('pole').value = document.getElementById('pole').value +'4';
});

document.getElementById('number5').addEventListener('click' , function() {
    document.getElementById('pole').value = document.getElementById('pole').value +'5';
});

document.getElementById('number6').addEventListener('click' , function() {
    document.getElementById('pole').value = document.getElementById('pole').value +'6';
});

document.getElementById('number7').addEventListener('click' , function() {
    document.getElementById('pole').value = document.getElementById('pole').value +'7';
});

document.getElementById('number8').addEventListener('click' , function() {
    document.getElementById('pole').value = document.getElementById('pole').value +'8';
});

document.getElementById('number9').addEventListener('click' , function() {
    document.getElementById('pole').value = document.getElementById('pole').value +'9';
});

document.getElementById('number0').addEventListener('click' , function() {
    document.getElementById('pole').value = document.getElementById('pole').value +'0';
});
//stop przyciski numerow

//START DZIAŁANIA

//function dodaj() {
//    var poczatek = document.getElementById('pole').value;
//    var dzialanie = '+';
//    console.log(dzialanie);
//    console.log('pierwsza czesc=' + poczatek);
//    document.getElementById('pole').value = "";
//    document.getElementById('pole').placeholder = poczatek + ' +';
//    return poczatek;
//}
//
//document.getElementById('dodaj').addEventListener('click' , dodaj() )

document.getElementById('dodaj').addEventListener('click' , function() {
    var poczatek = document.getElementById('pole').value;
    var dzialanie = '+';
    console.log(dzialanie);
    document.getElementById('pole').value = "";
    document.getElementById('pole').placeholder = poczatek + ' +';
    return dzialanie;
    
});


document.getElementById('odejmij').addEventListener('click' , function() {
    var poczatek = document.getElementById('pole').value;
    var dzialanie = odejmij;
    document.getElementById('pole').value = "";
    document.getElementById('pole').placeholder = poczatek + ' -';
    
});

document.getElementById('pomnoz').addEventListener('click' , function() {
    var poczatek = document.getElementById('pole').value;
    var dzialanie = pomnoz;
    document.getElementById('pole').value = "";
    document.getElementById('pole').placeholder = poczatek + ' *';
    
});

document.getElementById('podziel').addEventListener('click' , function() {
    var poczatek = document.getElementById('pole').value;
    var dzialanie = podziel;
    document.getElementById('pole').value = "";
    document.getElementById('pole').placeholder = poczatek + ' /';
    
});

//WYKONAJ

//function efekt() {
//    var koniec = document.getElementById('pole').value;
//    var rezultat = poczatek + koniec;
//    console.log(rezultat);
//    
//}

//document.getElementById('exe').addEventListener('click', function() {
//    var koniec = document.getElementById('pole').value;
//    console.log(dzialanie);
//   
//    
//})



//function oblicz() {
//    var koniec = document.getElementById('pole').value;
//    console.log(dzialanie + koniec)
//}