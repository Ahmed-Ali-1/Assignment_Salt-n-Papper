// owl-slider

$(".insta-custom-section").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  center: true,
  responsive: {
    0: {
      items: 2,
    },
    400: {
      items: 3.5,
    },
    750: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  },
});

$(".display_resp_show").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  dots: false,
  center: true,
  
  responsive: {
    0: {
      items: 1.4,
    },
    500: {
      items: 2,
    },
    750: {
      items: 3.5,
    },
   
  },
});
