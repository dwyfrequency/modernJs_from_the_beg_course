const log = console.log;
document
  .querySelector('#button')
  .addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN - specify type of request we are making, the resource, and do it async  
  xhr.open('GET', 'data.txt', true);

  console.log('READYSTATE', xhr.readyState);

  // Optional - Used for spinners/loaders (readyState in stage 3)
  xhr.onprogress = function () {
    console.log('READYSTATE', xhr.readyState);
  };
  
  // when everything above is ready, make a resource reqiest and once done trigger the function onload
  xhr.onload = function() {
    if(this.status === 200) {
      document
        .querySelector('#output')
        .innerHTML = `<p>${this.responseText}</p>`;
    }
  }

    // Older version
  /*
  xhr.onreadystatechange = function() {
    console.log('READYSTATE', xhr.readyState);
    if(this.status === 200 && this.readyState === 4) {
      console.log(this.responseText);
    }
  }
  */

  // Check for errors
  xhr.onerror = function () {
    console.log('Request error...');
  }

  // Finalizes request and actually send it 
  xhr.send();
}; 

  // HTTP Statuses
  // 200: 'OK'
  // 403: 'Forbidden'
  // 404: 'Not Found'
  // ------------------
  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready
  // Newest version, not needed to check readyState, aways in readyState 4