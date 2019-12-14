$(document).ready(function () {
    // $('.masters__info-photo').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.masters__slider'
    //   });
    //   $('.masters__slider').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     asNavFor: '.masters__info-photo',
    //     dots: true,
    //     centerMode: true,
    //     focusOnSelect: true
    //   });
    // $('.masters__info-inner').slick({
    //     dots: true,
    //     arrows: false,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // });

    $('.testimonial__item-slider').slick({
        infinite: true,
        speed: 700,
        slidesToShow: 1,
    });

    $('.masters__info-inner').slick({
        infinite: true,
        dots: true,
        arrows: false,
        speed: 700,
        slidesToShow: 1,
    });
});