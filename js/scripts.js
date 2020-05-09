$(function() {
  $(".carousel").carousel({interval: 2000});
  $('.popular-itineraties__carousel').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".add-to-itinerary").click(function(){
    this.style.backgroundColor = "#3F9C35";
    this.style.border = "#3F9C35";
    this.innerHTML = "Added to Itinerary";
  });

  $(".send-contact-btn").click(function(){
    this.style.backgroundColor = "#3F9C35";
    this.style.border = "#3F9C35";
    this.innerHTML = "Sent!";
  });
});