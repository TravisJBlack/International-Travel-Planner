//getting the button and search input
const cityInputEL = document.getElementById('city');
const submitButton = document.getElementById('city-button');

//fucntion to handle the input from the user and sending the info to another function
const citySubmit = function (){
    const searchedCity = cityInputEL.value.trim();
  
    if(searchedCity) {
      getLocation(searchedCity);
    }
  ;}
  
// fucntion takes the city enter and then gives a city id and passes it 
  const getLocation = function (city){
    const url = `https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations?name=${city}&search_type=HOTEL`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ff13b66632mshee3571a2fc826dfp1bdf44jsn46e68ce70f5b',
            'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
        }
    };
  
    fetch(url, options).then(function (response) {
      if(response.ok) {
        response.json().then(function (data) {
          console
          console.log(data[1].cityID);
          hotels(data[1].cityID);
        })
      } else {
        alert("please enter a valid city");
      }
    });
  };

// takes the city id and uses to get a list of hotels from api 
  const hotels = function (cityId){
    const hotelUrl = `https://priceline-com-provider.p.rapidapi.com/v1/hotels/search?location_id=${cityId}&date_checkin=2024-07-24&date_checkout=2024-07-25&sort_order=PROXIMITY&rooms_number=1`;
    const hotelOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ff13b66632mshee3571a2fc826dfp1bdf44jsn46e68ce70f5b',
            'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
        }
    };
  
    fetch(hotelUrl, hotelOptions).then(function (response) {
      if(response.ok) {
        response.json().then(function (data) {
        console.log(data);
        hotelDetails(data.hotels);
        })
      } else {
      console.log(error);
     }
    });
  };
  
  //fucntion to diplay all hotel data, handles getting the elements and then adding info into them also takes the rating number and put it into a function to render a star rating 
  const hotelDetails = function (details){
    console.log(details);
  
    document.getElementById("rating1").innerHTML = getStars(details[0].starRating);
    document.getElementById("rating2").innerHTML = getStars(details[1].starRating);
    document.getElementById("rating3").innerHTML = getStars(details[2].starRating);
    document.getElementById("rating4").innerHTML = getStars(details[3].starRating);
    document.getElementById("rating5").innerHTML = getStars(details[4].starRating);
  
    function getStars(rating) {
      // Round to nearest half
      rating = Math.round(rating * 2) / 2;
      let output = [];
    
      // Append all the filled whole stars
      for (var i = rating; i >= 1; i--)
        output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');
    
      // If there is a half a star, append it
      if (i == .5) output.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');
    
      // Fill the empty stars
      for (let i = (5 - rating); i >= 1; i--)
        output.push('<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');
    
      return output.join('');
    }

    const img1 = document.getElementById('img1');
    img1.src = details[0].thumbnailUrl;
    
    const hotel1NameEl = document.getElementById('hotel-name1');
    const hotel1AddressEl = document.getElementById('hotel-address1');
    const hotel1CostEl = document.getElementById('cost1');
   
    hotel1NameEl.innerHTML = `${details[0].name}`;
    hotel1AddressEl.innerHTML = `${details[0].location.address.addressLine1}, ${details[0].location.address.cityName}, ${details[0].location.address.provinceCode}, ${details[0].location.address.zip}, ${details[0].location.address.countryName}`;
    hotel1CostEl.innerHTML = `min: $${details[0].ratesSummary.minPrice}`;

    const img2 = document.getElementById('img2');
    img2.src = details[1].thumbnailUrl;
    
    const hotel2NameEl = document.getElementById('hotel-name2');
    const hotel2AddressEl = document.getElementById('hotel-address2');
    const hotel2CostEl = document.getElementById('cost2');
   
    hotel2NameEl.innerHTML = `${details[1].name}`;
    hotel2AddressEl.innerHTML = `${details[1].location.address.addressLine1}, ${details[1].location.address.cityName}, ${details[1].location.address.provinceCode}, ${details[1].location.address.zip}, ${details[1].location.address.countryName}`;
    hotel2CostEl.innerHTML = `min: $${details[1].ratesSummary.minPrice}`;

    const img3 = document.getElementById('img3');
    img3.src = details[2].thumbnailUrl;
    
    const hotel3NameEl = document.getElementById('hotel-name3');
    const hotel3AddressEl = document.getElementById('hotel-address3');
    const hotel3CostEl = document.getElementById('cost3');
   
    hotel3NameEl.innerHTML = `${details[2].name}`;
    hotel3AddressEl.innerHTML = `${details[2].location.address.addressLine1}, ${details[2].location.address.cityName}, ${details[2].location.address.provinceCode}, ${details[2].location.address.zip}, ${details[2].location.address.countryName}`;
    hotel3CostEl.innerHTML = `min: $${details[2].ratesSummary.minPrice}`;

    const img4 = document.getElementById('img4');
    img4.src = details[3].thumbnailUrl;
    
    const hotel4NameEl = document.getElementById('hotel-name4');
    const hotel4AddressEl = document.getElementById('hotel-address4');
    const hotel4CostEl = document.getElementById('cost4');
   
    hotel4NameEl.innerHTML = `${details[3].name}`;
    hotel4AddressEl.innerHTML = `${details[3].location.address.addressLine1}, ${details[3].location.address.cityName}, ${details[3].location.address.provinceCode}, ${details[3].location.address.zip}, ${details[3].location.address.countryName}`;
    hotel4CostEl.innerHTML = `min: $${details[3].ratesSummary.minPrice}`;

    const img5 = document.getElementById('img5');
    img5.src = details[4].thumbnailUrl;
    
    const hotel5NameEl = document.getElementById('hotel-name5');
    const hotel5AddressEl = document.getElementById('hotel-address5');
    const hotel5CostEl = document.getElementById('cost5');
   
    hotel5NameEl.innerHTML = `${details[4].name}`;
    hotel5AddressEl.innerHTML = `${details[4].location.address.addressLine1}, ${details[4].location.address.cityName}, ${details[4].location.address.provinceCode}, ${details[4].location.address.zip}, ${details[4].location.address.countryName}`;
    hotel5CostEl.innerHTML = `min: $${details[4].ratesSummary.minPrice}`;
  };
  
  submitButton.addEventListener('click', citySubmit);