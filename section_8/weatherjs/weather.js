// File used to make request to the api 
class Weather {
  constructor(city, countryCode) {
    this.apiKey = config.WEATHER_KEY;
    this.city = city;
    this.countryCode = countryCode;
  }


  // Fetch weather from API 
  async getWeather() {
    // URL
    const weatherEndpoint = `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&units=imperial&appid=${this.apiKey}`;
    // log(weatherEndpoint);

    const weatherResps = await fetch(weatherEndpoint);
    const responseData = await weatherResps.json();
    return responseData;
  }


  changeLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }

  // async getIconImg(iconId) {
  //   const endpoint = `http://openweathermap.org/img/w/${iconId}.png`;
  //   const response = await fetch(endpoint);
  //   const responseData = await response.blob();
  //   log(responseData);
  // }

}