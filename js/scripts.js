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

  //retrieving from local storage on load
  // var localStorageQuickOrderData = JSON.parse(localStorage.getItem('quickorderitems'));
  // var quickOrderRow = $(".app-quick-order__part-row");

  // if (localStorageQuickOrderData !== null) {
  //   $.each(localStorageQuickOrderData,function(index,localStorageQuickOrderData){
  //     var myClone = quickOrderRow.clone();
  //     myClone.find(".jq-quick-order-part-number").val(localStorageQuickOrderData.partNumber);
  //     myClone.find(".number-stepper input").val(localStorageQuickOrderData.partQuantity);
  //     $(".app-quick-order-body").append(myClone);
  //   });
  //   $(".app-quick-order-body").append(quickOrderRow);
  //   $(".app-quick-order-footer").css("display", "block");
  // }

  $(".add-to-itinerary").click(function(){
    this.style.backgroundColor = "#3F9C35";
    this.style.border = "#3F9C35";
    this.innerHTML = "Added to Itinerary";
    this.addClass("sasa");
    let locationSelected = this.dataset.locationName;
    saveToStorage(locationSelected);
  });

  // $(".remove-from-itinerary").click(function(){
    // let locationSelected = this.dataset.locationName;
    // clearStorage(locationSelected);
  // });

  $(".send-contact-btn").click(function(){
    this.style.backgroundColor = "#3F9C35";
    this.style.border = "#3F9C35";
    this.innerHTML = "Sent!";
  });

  function saveToStorage(locationSelected) {
    console.log(locationSelected);
    let locationData = [];
    locationData.push({
      location: locationSelected
    });
    localStorage.setItem('currentItinerary', JSON.stringify(locationData));
  }

  // function clearStorage(locationSelected) {
  //   localStorage.removeItem("locationData");
  // }
  
});