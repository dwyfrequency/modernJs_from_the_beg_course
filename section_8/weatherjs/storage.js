const log = console.log;
// Working with local storage
class Storage {
  constructor() {
    const { city, countryCode} = this.getLocationData();

    // if somthing is in local storage, set it else default to miami 
    this.city = city ? city : `Miami`;
    this.countryCode = countryCode ? countryCode : `US`;
    
    this.setLocationData(this.city, this.countryCode);
  }

  getLocationData() {
    this.city = localStorage.getItem(`city`);
    this.countryCode = localStorage.getItem(`countryCode`);
    return {
      city: this.city,
      countryCode: this.countryCode
    }
  }

  // because we are just storing two strings with seperate keys, we dont need to do json methods
  setLocationData(city, countryCode) {
    localStorage.setItem('city', city);
    localStorage.setItem('countryCode', countryCode);
  }
}

