/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 3.0.0
 * @author Jack Dwyer
 * @license MIT
 *
 */

class EasyHTTP {
  // Make an HTTP GET request 
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();

    return resData;
  }

  async post(url, body) {
    const headers = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body
    }; // body is destructured to a key of body and value of the object passed in 
    const response = await fetch(url, headers);
    const respData = await response.json();

    return respData;
  }

  async put(url, body) {
    const headers = {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body
    }; // body is destructured to a key of body and value of the object passed in 
    const response = await fetch(url, headers);
    const respData = await response.json();

    return respData;
  }

  async delete(url) {
    const headers = {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' }
    }; // body is destructured to a key of body and value of the object passed in 
    const response = await fetch(url, headers);
    const respData = await `Resource Deleted!`;

    return respData;
  }
}

export const http = new EasyHTTP();
