// Instantiate http object
const http = new EasyHTTP();

// Get Users
// const endpoint = `https://jsonplaceholder.typicode.com/users`;

// we are getting a promise back from our library so we need to use then and catch 
// http
//   .get(endpoint)
//   .then(data => log(data))
//   .catch(err => log(err));

// User Data 
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

// Post User endpoint 
// const postEndpoint = 'https://jsonplaceholder.typicode.com/users';


// Create User 
// http
//   .post(postEndpoint, data)
//   .then(response => log(response))
//   .catch(err => log(`Error: ${err}`));

// Put User Endpoint 
// const putEndpoint = 'https://jsonplaceholder.typicode.com/users/1';

// // Update User
// http
//   .put(putEndpoint, data)
//   .then(response => log(response))
//   .catch(err => log(`Error: ${err}`));

// Delete User
const delEndpoint = 'https://jsonplaceholder.typicode.com/users/1'

http
  .delete(delEndpoint)
  .then(response => log(response))
  .catch(err => log(err));