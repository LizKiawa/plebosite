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
  let locationData = [];
  getCurrentItinerary();

  $(".add-to-itinerary").click(function(){
    this.style.backgroundColor = "#3F9C35";
    this.style.border = "#3F9C35";
    this.innerHTML = "Added to Itinerary";
    let locationSelected = this.dataset.locationName;
    saveToStorage(locationSelected);
  });

  $(".send-contact-btn").click(function(){
    this.style.backgroundColor = "#3F9C35";
    this.style.border = "#3F9C35";
    this.innerHTML = "Sent!";
  });

  $(".current-itinerary__modal").click(function(){
    getCurrentItinerary();
  });

  $(".clear-itinierary").click(function(e){
    e.preventDefault();
    clearCurrentItinerary();
  });

  function getCurrentItinerary() {
    //retrieving from local storage
    let localStorageCurrentItinerary = JSON.parse(localStorage.getItem('currentItinerary'));
    let currentItineraryList = $(".current-itinerary-list");
    let clearBtn = $(".clear-itinierary");
    
    if (localStorageCurrentItinerary !== null) {
      currentItineraryList[0].innerHTML="";
      clearBtn[0].style.display="block";
      $.each(localStorageCurrentItinerary,function(index,localStorageCurrentItinerary){
        currentItineraryList.append('<p>' + localStorageCurrentItinerary.location + '</p>');   
      });
    } else {
      currentItineraryList[0].innerHTML="You have no items in your itinerary";
      clearBtn[0].style.display="none";
    }
  }

  function saveToStorage(locationSelected) {
    console.log(locationSelected);
    locationData.push({
      location: locationSelected
    });
    localStorage.setItem('currentItinerary', JSON.stringify(locationData));
  }

  function clearCurrentItinerary() {
    localStorage.removeItem("currentItinerary");
    getCurrentItinerary();
  }
  
});