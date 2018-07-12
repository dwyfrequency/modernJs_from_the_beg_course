// Dealing with User Interface
class UI {
  constructor() {
    this.location = document.querySelector('#w-location'); 
    this.desc = document.querySelector('#w-desc'); 
    this.string = document.querySelector('#w-string'); 
    this.details = document.querySelector('#w-details'); 
    this.icon = document.querySelector('#w-icon'); 
    this.humidity = document.querySelector('#w-humidity'); 
    this.tempHigh = document.querySelector('#w-temp-high'); 
    this.tempLow = document.querySelector('#w-temp-low'); 
    this.wind = document.querySelector('#w-wind'); 
  };

  paint(weather) {
    // const { description, icon } = weather.weather[0]
    // log(description, icon);
    // const { humidity, temp } = weather.main;
    // log(humidity, temp);

    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description.toUpperCase();
    this.string.textContent = `${weather.main.temp} F`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`)
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.tempHigh.textContent = `High of ${weather.main.temp_max}`;
    this.tempLow.textContent = `Low of ${weather.main.temp_min}`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} mph`;

  }
}