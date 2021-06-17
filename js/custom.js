// Slick slider js
$('.menu_slider').slick({
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 3,
    variableWidth: true,
    arrows: true,
    autoplay: false,
    dots: false,
    prevArrow: '.slick-prev',
    nextArrow: '.slick-next',
  });

   
$('.main_slider').slick({
  dots: true,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,

  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       infinite: true,
  //       dots: true
  //     }
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }
   
  // ]
});