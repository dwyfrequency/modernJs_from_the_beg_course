const http = new EasyHTTP();

const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
};

http
  .get('https://jsonplaceholder.typicode.com/users')
  .then(data => log(data));


http
  .post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => log(data));

http
  .put('https://jsonplaceholder.typicode.com/users/1', data)
  .then(data => log(data));

  http
  .delete('https://jsonplaceholder.typicode.com/users/1')
  .then(data => log(data));

















// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

// User Data
// const data = {
//   name: 'John Doe',
//   username: 'johndoe',
//   email: 'jdoe@gmail.com'
// };

// Create Post
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

// Update Post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))

// Delete User
// http.delete('https://jsonplaceholder.typicode.com/users/2')
//   .then(data => console.log(data))
//   .catch(err => console.error(err));