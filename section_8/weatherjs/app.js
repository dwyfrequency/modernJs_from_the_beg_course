// Main js file

// Init Storage object
const storage = new Storage();

// Get stored location data 
const weatherLocation = storage.getLocationData();

// Init Weather object
const weather = new Weather(weatherLocation.city, weatherLocation.countryCode);

// Init UI 
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

// Change location event
document.querySelector('#w-change-btn').addEventListener('click', e => {
  log(e);
  const city = document.querySelector('#city').value;
  const country = document.querySelector('#country').value;
  log(city, country);

  // Update location with modal vals 
  weather.changeLocation(city, country);

  // Get and display weather
  getWeather();

  // Close modal when changes are saved - need to use jquery for this
  $(`#locModal`).modal(`hide`);
});

function getWeather() {
  weather
    .getWeather()
    .then(resp => {
      ui.paint(resp);
      
      log(resp);
      // weather is an array of objects, but b/c we are are only requesting 1 city so we can take the first idx
      // log(resp.weather[0]);
      const { description, main, icon } = resp.weather[0]
      log(description, main, icon);
      const { humidity, temp } = resp.main;
      log(humidity, temp);

      // instead of fetch below - we can just hot load image https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon
      // weather
      //   .getIconImg(icon)
      //   .then(i => log(log));
    })
    .catch(err => log(err));
}

  