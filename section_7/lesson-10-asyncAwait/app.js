const log = console.log;

// // adding async makes this function return a promise
// async function myFunc() {
//   // return `Hello`;

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Hello`);
//     }, 1000);
//   })

//   // Can also throw errors
//   const error = Math.random() >= 0.5 ? true : false;
  
//   if(!error) {
//     const res = await promise; // Wait until the promise is resolved to send the response 
//     return res;
//   } else {
//     await Promise.reject(new Error(`Something went terribly wrong!`));
//   }


// }

// // log(myFunc()); // returns Promise 
// myFunc()
//   .then(res => log(`Resolved promise response: ${res}`)) // returns content in log statement
//   .catch(err => log(err)); // catch errors 

/* Opinion - looks like */
async function getUsers(url) {
  // await response of the fetch call
  const response = await fetch(url);

  // Only proceed once its resolved 
  const data = await response.json();

  // Only proceed once second promise is resolved 
  return data;
}

const endpoint = `https://jsonplaceholder.typicode.com/users`;
getUsers(endpoint)
  .then(users => log(users));