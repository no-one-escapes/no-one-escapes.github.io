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
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    arrows: false,
                }
            }
        ]
    });

    $('.masters__info-inner').slick({
        infinite: true,
        dots: true,
        arrows: false,
        speed: 700,
        slidesToShow: 1,
    });
    $('.blog__inner').slick({
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 2048,
                settings: "unslick"
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.gallery__item-photo-line').slick({
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 2048,
                settings: "unslick"
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


});

(function($){
    $(function() {
      $('.navbar__menu-burger').on('click', function() {
        $(this).closest('.navbar')
          .toggleClass('open');
          
      });
      
      $('.navbar__list-item').on('click', function() {
        // do something
  
        $(this).closest('.navbar')
          .removeClass('open');
      });
    });
  })(jQuery);



//   (function($){
//     $(function() {
//       $('.navbar__menu-burger').on('click', function() {
//         $(this).closest('.navbar')
//           .toggleClass('menu_state_open');
          
//       });
      
//       $('.navbar__list-item').on('click', function() {
//         // do something
  
//         $(this).closest('.navbar')
//           .removeClass('menu_state_open');
//       });
//     });
//   })(jQuery);