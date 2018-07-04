const log = console.log;

document
  .querySelector('#button1')
  .addEventListener('click', loadCustomer);
document
  .querySelector('#button2')
  .addEventListener('click', loadCustomer);

function loadCustomer(e) {
  // determine whether we should call the customer or customers file
  const resource = e
                    .target
                    .innerText
                    .split(' ')[1]
                    .toLowerCase();

  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN - specify type of request we are making, the resource, and do it async  
  xhr.open('GET', `${resource}.json`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      /*
      document
        .querySelector(`#${resource}`)
        .innerHTML = `<p>${this.responseText}</p>`;
      */
      const custInfoSection = document
                                .querySelector(`#${resource}`)

      const customerInfo = JSON.parse(this.responseText);
      // const isArr = JSON.parse(this.responseText) instanceof Array;
      let output; // using let b/c i reassign the val
      // if the json is an array of objects 
      if (customerInfo instanceof Array) {
        // create an array of customer info and joing that data to one string  
        output = customerInfo.map(customer => {
          return `
            <ul>
              <li>ID: ${customer.id}</li>
              <li>Name: ${customer.name}</li>
              <li>Company: ${customer.company}</li>
              <li>Phone: ${customer.phone}</li>
            </ul>
            `;
        });
        output = output.join('');
      } else {
        output = `
        <ul>
          <li>ID: ${customerInfo.id}</li>
          <li>Name: ${customerInfo.name}</li>
          <li>Company: ${customerInfo.company}</li>
          <li>Phone: ${customerInfo.phone}</li>
        </ul>
      `;
      }
      
      custInfoSection.innerHTML = output;
    }
  }

  // Check for errors
  xhr.onerror = function () {
    console.log('Request error...');
  }

  // Finalizes request and actually send it 
  xhr.send();
};