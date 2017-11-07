$(function () {
    //    scroll menu color change
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
            $('#main-nav').addClass('scroll');
            $('#main-nav').css({
                'transition': 'all 5s linear'
            });

        } else {
            $('#main-nav').removeClass('scroll');
        }
    })
    if ($(window).scrollTop() >= 50) {
        $('#main-nav').addClass('scroll');
    }





})
