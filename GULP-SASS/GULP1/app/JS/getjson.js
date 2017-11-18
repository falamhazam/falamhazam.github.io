$(document).ready(function () {


    $.getJSON('../package.json', function (data) {

        wstaw(data.author);

    });

    function wstaw(autor) {
        //        $('span').append(autor);
        document.write('Autorem jest: ' + autor);

    }



})
