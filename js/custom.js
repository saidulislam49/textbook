// Slick slider js
$('.menu_slider').slick({
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 3,
    variableWidth: true,
    arrows: true,
    autoplay: false,
    dots: false,
    prevArrow: '.slick-prev',
    nextArrow: '.slick-next',

      responsive: [
    {
      breakpoint: 1024,
      settings: {  
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: { 
        slidesToScroll: 2,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: { 
        slidesToScroll: 1,
        dots: false
      }
    }
   
  ]
  });

   
$('.main_slider').slick({
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  speed: 1000,
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