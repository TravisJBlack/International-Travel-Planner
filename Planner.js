const requestURL = '';
const cityInputEL = document.getElementById('city');
const submitButton = document.getElementById('city-button');

fetch(requestURL)

const apiKey = `fca_live_nfY0OLbxe8dNoSBSSA33dKeIJhTJhWVgG5u2SSW1`
function currency_api(base,exchange) {
  const queryurl = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&base_currency=${base}&currencies=${exchange}`;
  fetch(queryurl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
currency_api("USD","EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,AUD,BRL,CAD,CNY,HKD,IDR,ILS,INR,KRW,MXN,MYR,NZD,PHP,SGD,THB,ZAR")

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
        const cityId = 
        console.log(data);
      })
    } else {
      console.log(error);
    }
  });
};

const hotels = function (){
  const hotelUrl = 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/search?location_id=3000012264&date_checkin=2024-07-24&date_checkout=2024-07-25&sort_order=PROXIMITY&rooms_number=1';
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
      })
    } else {
    console.log(error);
   }
  });
};

submitButton.addEventListener('click', citySubmit);