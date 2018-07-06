const log = console.log;

function easyHTTP() {
  this.http = new XMLHttpRequest();
} 

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  /*issue with using this in the function syntax as the this keyword pertains to the function. We can assign a variable the this parameter before it is reassigned in the inner function. 
  arrow functions fix this by adding a lexical this
  this.http.onload = () => {
    if (this.http.status === 200) {
      log(this.http.responseText);
    }
  }
  */
  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      // by adding the callback, we are doign this async
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }
  
  this.http.send();
}

// Make an HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  // Set Http headers
  this.http.setRequestHeader('Content-type', 'application/json');

  // need this b/c not using arrow functions
  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

// Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  // Set Http headers
  this.http.setRequestHeader('Content-type', 'application/json');

  // need this b/c not using arrow functions
  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function (url, callback) {
  this.http.open('DELETE', url, true);
  
  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      // by adding the callback, we are doign this async
      // response will be an empty object if successful
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}
