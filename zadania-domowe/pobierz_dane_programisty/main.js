$(document).ready(function () {

    $('#get-info').click(function () {

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            console.log(data);
            $('#dane-programisty').text('Imię i nazwisko: ' + data.imie + ' ' + data.nazwisko + ' Zawód: ' + data.zawod + ' Firma: ' + data.firma);

        })

    })


})
