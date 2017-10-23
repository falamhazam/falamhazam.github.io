'use strict';

var mainHeader = document.getElementById('main-header');
// przypisalem naglowek do zmiennej

mainHeader.innerHTML = "NOWA TRESC"; 
//ustawienie tresci

var link = document.getElementsByClassName('link')[0]; //przypisanie pierwszego linka z dokumentu

link.href = 'http://google.com';  //nadpisanie atrybutu href

console.log(link.classList); //pobiera liste klass w postaci tabeli

//link.className = 'nowka-klasowka'; //nadpisuje nazwe klasy

link.className += ' nowiutka'; //dodaje nowa klase bez nadpisania

mainHeader.style.color = 'pink'; //dodajemy troche stylu

