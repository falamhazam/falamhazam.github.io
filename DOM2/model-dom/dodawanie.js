'use strict'

var istniejacyWezel = document.getElementById('parSecond');
console.log(istniejacyWezel);

var newElement = document.createElement('p'); //stworz nowy element

var newElementContent = document.createTextNode('To jeset nowy paragraf PARAGRAF');

newElement.appendChild(newElementContent); //dodaj tekst do elementu;

console.log(newElement);

istniejacyWezel.appendChild(newElement);

//istniejacyWezel.removeChild(newElement);

var parFirstDiv = document.getElementById('parFirst');

var linkwParagrafie = document.getElementById('parFirst').children[2];

console.log(linkwParagrafie);

parFirstDiv.replaceChild(newElement, linkwParagrafie);

/*dodaj znacznik <br> po kazdym linku i usun z nich atrybut klasy*/

var allLinks = document.getElementsByTagName('a');

console.log(allLinks);

for (var i = 0; i < allLinks.length; i++) {
//    console.log(allLinks[i]);
    var br = document.createElement('br');
    allLinks[i].parentNode.insertBefore(br, allLinks[i].nextSibling);
    allLinks[i].removeAttribute('class'); //usun atrybut class
    allLinks[i].setAttribute('id', 'link-id-'+i);
}

