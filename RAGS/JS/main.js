$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


var navbar = $('.navbar');
console.log(navbar.innerHeight())

var paddingTop = navbar.innerHeight();
console.log(paddingTop);

$('#all-container').css('margin-top', paddingTop);
