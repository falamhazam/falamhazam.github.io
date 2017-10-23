class Osoba {//klasy nazywam wielka litera
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
    wyswietlInfo() {
        console.log("Imię: " + this.imie + ", " + "Nazwisko: " + this.nazwisko);
    }
} 

var tomasz = new Osoba("Tomasz", "Zygmunt");

var julia = new Osoba("Julia", "Tak");

tomasz.wyswietlInfo();

julia.wyswietlInfo();

console.log(tomasz.nazwisko);