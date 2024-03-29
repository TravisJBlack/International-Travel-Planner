const requestURL = '';

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
currency_api("USD","EUR,CAD")