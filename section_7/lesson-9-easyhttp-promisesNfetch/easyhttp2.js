/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author Jack Dwyer
 * @license MIT
 *
 */
// Refactoring to use promises instead of callbacks

const log = console.log;

// no need for constructor b/c we are not using the xhr object 
class EasyHTTP {
  // Make HTTP GET request 
  get(url) {
    // Need to wrap fetch in a Promise to return the values instead of simply logging them
    return new Promise((resolve, reject) => {
      // We call resolve when we went to send the intended response and reject when we want to throw an error 
      fetch(url)
        .then(response => response.json())
        .then(jsonData => resolve(jsonData)) //returns promise
        .catch(err => reject(err));
    })
  }

  // Make HTTP Post request
  post(url, data) {
    // think of resolve and reject as different return statements 
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        }, 
        body : JSON.stringify(data)
      })
        .then(response => response.json())
        .then(jsonData => resolve(jsonData))
        .catch(err => reject(err));
    })
  }

  // Make HTTP Put request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(jsonData => resolve(jsonData))
        .catch(err => reject(err));
    })
  }

  // Make HTTP Delete request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(jsonData => resolve(`Resource Deleted`))
        .catch(err => log(err));
    })
  }
}

















// class EasyHTTP {
//   // Make an HTTP GET Request
//   get(url) {
//     return new Promise((resolve, reject) => {
//       fetch(url)
//         .then(res => res.json())
//         .then(data => resolve(data))
//         .catch(err => reject(err))
//     });
//   }

//   // Make an HTTP POST Request
//   post(url, data) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       })
//         .then(res => res.json())
//         .then(data => resolve(data))
//         .catch(err => reject(err))
//     });
//   }

//   // Make an HTTP Put Request
//   put(url, data) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: 'PUT',
//         headers: {
//           'Content-type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       })
//         .then(res => res.json())
//         .then(data => resolve(data))
//         .catch(err => reject(err))
//     });
//   }

//   // Make an HTTP DELETE Request
//   delete(url) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: 'DELETE',
//         headers: {
//           'Content-type': 'application/json'
//         }
//       })
//         .then(res => res.json())
//         .then(() => resolve('Resource Deleted...'))
//         .catch(err => reject(err))
//     });
//   }
//  }