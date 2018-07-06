const log = console.log;

document
  .querySelector('.get-jokes')
  .addEventListener('click', getJokes)

function getJokes(e) {
  // could also do 'input[type="number"]'
  const numOfJokes = document.querySelector('#number').value;
  const endpoint = `http://api.icndb.com/jokes/random/${numOfJokes}`;

  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN - specify type of request we are making, the resource, and do it async  
  xhr.open('GET', `${endpoint}`, true);

  xhr.onload = function () {
    log(`in onload`)
    if (this.status === 200) {
      // parse json response
      const response = JSON.parse(this.responseText);
      
      let output = '';
      if(response.type === "success") {
        // .value is an array of joke and meta data
        // log(response.value);
        output += response
                    .value
                    .reduce((accum, obj) => {
                      return accum + `<li>${obj.joke}</li>`;
                    }, '');
      } else {          
        output += `<li>Something went wrong</li>`
      }
      log(output);
      const jokeList = document.querySelector('.jokes');
      jokeList.innerHTML = output;
      
    }
  }

  // Check for errors
  xhr.onerror = function () {
    console.log('Request error...');
  }

  // Finalizes request and actually send it 
  xhr.send();
  
  e.preventDefault();
}

// const jokeList = document.querySelector('.jokes');
log(jokeList);

// document.querySelector('#number')