$(function(){
    $('.slider__inner').slick({
        asNavFor: '.thumbs'
    });

    $('.thumbs').slick({
        slidesToShow: 6,   
        slidesToScroll: 6,
        asNavFor: '.slider__inner',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 972,
                settings:{
                slidesToShow: 3,
                }
            }
        ]
        
    });

    $('.header__menu-btn').on('click', function(){
        $('.header__menu ul').slideToggle(); 
    });
   
});