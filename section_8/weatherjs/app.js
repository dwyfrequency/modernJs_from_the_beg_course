// Main js file

// Init Weather object
const weather = new Weather('Glenside', 'US');
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

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

  