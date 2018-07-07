/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 3.0.0
 * @author Jack Dwyer
 * @license MIT
 *
 */
const log = console.log;

class EasyHTTP {
  // Make an HTTP GET request 
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();

    return resData; 
  }

  async post(url, body) {
    const headers = { method: 'POST', 
                      headers: { 'Content-type': 'application/json'},
                      body }; // body is destructured to a key of body and value of the object passed in 
    log(headers);
    const response = await fetch(url, headers);
    const respData = await response.json();
    
    return respData;
  }

  async put(url, body) {
    const headers = { method: 'PUT', 
                      headers: { 'Content-type': 'application/json'},
                      body }; // body is destructured to a key of body and value of the object passed in 
    log(headers);
    const response = await fetch(url, headers);
    const respData = await response.json();
    
    return respData;
  }

  async delete(url) {
    const headers = { method: 'DELETE', 
                      headers: { 'Content-type': 'application/json'}}; // body is destructured to a key of body and value of the object passed in 
    log(headers);
    const response = await fetch(url, headers);
    const respData = await `Resource Deleted!`;
    
    return respData;
  }


  // Make an HTTP GET Request
  // async get(url) {
  //   const response = await fetch(url);

  //   const resData = await response.json();

  //   return resData;
  // }

  // // Make an HTTP POST Request
  // async post(url, data) {
  //   const response = await fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   })

  //   const resData = await response.json()

  //   return resData;
  // }

  // // Make an HTTP Put Request
  // async put(url, data) {
  //   const response = await fetch(url, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   })

  //   const resData = await response.json()

  //   return resData;
  // }

  // // Make an HTTP DELETE Request
  // async delete(url) {
  //   const response = await fetch(url, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-type': 'application/json'
  //     }
  //   });

  //   const resData = await 'Resource Deleted...';

  //   return resData;
  // }
 }