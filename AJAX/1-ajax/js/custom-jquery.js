$(function () {
    'use strict'

    var jsonObiekt = undefined;

    function pobierzDaneJquery() {
        $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function (data) {
            jsonObiekt = data;
            console.log(data);
            $('#wstaw-jquery').append(jsonObiekt);


        })
    }

    $('#get-jquery').click(pobierzDaneJquery);

})
