$(document).ready(function () {
    $('.section-one__slider').slick({
        dots: true,
        arrows: false
    });

    $('.slider__clients-card').slick({
        dots: true,
        arrows: false
    });

    $('.section-five__team').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.section-nine__slider').slick({
        dots: true,
        arrows: false
    });

    $('.client-logos').slick({
        slidesToShow: 5,
        dots:false,
        arrows:false,
        autoplay: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true
            }
          }
        ]
      });

});




