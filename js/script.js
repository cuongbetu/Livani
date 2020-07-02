$(document).ready(function() {
   $('.main-carousel .carousel').carousel({
       interval:2000
   }); 

   $('.product-area .product-list .product-image .overlay i.fa').tooltip();

   $('.our-partners-slide').slick({
       arrows : false,
       slidesToShow : 6,
       slidesToScroll : 2,
       autoplay : true,
       pauseOnHover : false,
       autolaySpeed : 3000,
       responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
   });

   $('.instagram-slide').slick({
      arrows : false,
      slidesToShow : 4,
      slidesToScroll : 1,
      pauseOnHover : false,
      autoplay : true,
      autolaySpeed : 3000,
   });



   $('.facility-slide').slick({
       arrows : false,
       slidesToShow : 4,
       slidesToScroll : 1,
       pauseOnHover : false,
       autoplay : true,
       autolaySpeed : 3000,
       responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
   });
});