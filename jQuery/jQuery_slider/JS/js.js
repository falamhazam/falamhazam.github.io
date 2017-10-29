$(function () {
    'use strict';

    var slideShow = $('.slide-show');
    var slideCount = $('.single-slide').length;
//    console.log(slideCount);
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;

    slideShow.css('width', (slideCount * 100) + '%');
                        //slideCount + '00%'
    slideShow.find('.single-slide').css('width', slideWidth + '%');

//    console.log($('#slider').find('.single-slide'));


    slideShow.find('.single-slide').each(function(index) {
        $(this).css({'width' : slideWidth +'%',
                   'margin-left': index * slideWidth + '%'});
        
    });
    
    $('.prev-slide').click(function(){
        slide(slideIndex - 1);
    })
    
    $('.next-slide').click(function(){
        slide(slideIndex + 1);
    });
    
    function slide(slideIndexParameter) {
        if (slideIndexParameter < 0 || slideIndexParameter > slideCount - 1) {
            return;
        }
        
        var slideCaption = slideShow.find('.slide-caption').eq(slideIndexParameter);
        
        var marginLeft = (slideIndexParameter * (-100) + '%');
        
        
        slideCaption.hide();
        
        slideShow.animate({'margin-left' : marginLeft}, 1000, function() {
            slideIndex = slideIndexParameter;
            slideCaption.fadeIn();
            
        })
    }




})
