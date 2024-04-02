const cityInputEL = document.getElementById('city');
const submitButton = document.getElementById('city-button');

const citySubmit = function (){
    const searchedCity = cityInputEL.value.trim();
  
    if(searchedCity) {
      getLocation(searchedCity);
    }
  ;}
  
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
  
  
  
  
  
  const hotelDetails = function (details){
    console.log(details);
  
    document.getElementById("stars1").innerHTML = getStars(details[0].starRating);
    document.getElementById("stars2").innerHTML = getStars(details[1].starRating);
    document.getElementById("stars3").innerHTML = getStars(details[2].starRating);
    document.getElementById("stars4").innerHTML = getStars(details[3].starRating);
    document.getElementById("stars5").innerHTML = getStars(details[4].starRating);
  
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

    const hotel1El = document.getElementById('hotel1');
    const hotel2El = document.getElementById('hotel2');
    const hotel3El = document.getElementById('hotel3');
    const hotel4El = document.getElementById('hotel4');
    const hotel5El = document.getElementById('hotel5');
  
        hotel1El.innerHTML = `${details[0].name}-${details[0].location.address.addressLine1}, ${details[0].location.address.cityName}, ${details[0].location.address.provinceCode}, ${details[0].location.address.zip}, ${details[0].location.address.countryName}\n$${details[0].ratesSummary.minPrice}`;
        hotel2El.innerHTML = `${details[1].name}-${details[1].location.address.addressLine1}, ${details[1].location.address.cityName}, ${details[1].location.address.provinceCode}, ${details[1].location.address.zip}, ${details[1].location.address.countryName}\n$${details[1].ratesSummary.minPrice}`;
        hotel3El.innerHTML = `${details[2].name}-${details[2].location.address.addressLine1}, ${details[2].location.address.cityName}, ${details[2].location.address.provinceCode}, ${details[2].location.address.zip}, ${details[2].location.address.countryName}\n$${details[2].ratesSummary.minPrice}`;
        hotel4El.innerHTML = `${details[3].name}-${details[3].location.address.addressLine1}, ${details[3].location.address.cityName}, ${details[3].location.address.provinceCode}, ${details[3].location.address.zip}, ${details[3].location.address.countryName}\n$${details[3].ratesSummary.minPrice}`;
        hotel5El.innerHTML = `${details[4].name}-${details[4].location.address.addressLine1}, ${details[4].location.address.cityName}, ${details[4].location.address.provinceCode}, ${details[4].location.address.zip}, ${details[4].location.address.countryName}\n$${details[4].ratesSummary.minPrice}`;
  
  }
  
  
  submitButton.addEventListener('click', citySubmit);