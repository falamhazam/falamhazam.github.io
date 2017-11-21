$(document).ready(function () {

    $.getJSON('https://blockchain.info/pl/ticker', function (data) {

        $.each(data, function (key) {
            buildCurrencyList(key);

        })
    });

    function getCurrencyInfo(ilosc, waluta) {
        $.getJSON('https://blockchain.info/tobtc?currency=' + waluta + '&value=' + ilosc + '', function (data) {
            $('span').append(data);

        });
    }

    function buildCurrencyList(currency) {
        $('#waluta').append('<option>' + currency + '</option>')
    }

    $('#oblicz').click(function (event) {
        event.preventDefault();
        var ilosc = ($('#ilosc').val());
        var waluta = ($('#waluta').val());
        getCurrencyInfo(ilosc, waluta);


    });


})
