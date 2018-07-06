const log = console.log;
const posts = [
  {
    title: 'Post One',
    body: 'This is post one'
  },
  {
    title: 'Post Two',
    body: 'This is post two'
  }
];

// Without using callbacks
// function createPost(post, posts) {
//   setTimeout(() => {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts(posts) {
//   setTimeout(() => {
//     const output = posts.reduce((accum, post) => {
//       return accum + `<li>${post.title}</li>`;
//     }, '');
//     document.body.innerHTML = output;
//   }, 1000);
// }

// /* demonstrating the serve sending back the resource for the get request before creating the post  */
// createPost({
//               title: 'Post Three',
//               body: 'This is post three'
//             }, posts);
// getPosts(posts);

// With Using Callbacks - we do not have the same timing issue -- b/c we call the callback (getPosts) after the createPost func body runs  
function createPost(post, posts, callback) {
  setTimeout(() => {
    posts.push(post);
    callback(posts);
  }, 2000);
}

function getPosts(posts) {
  setTimeout(() => {
    const output = posts.reduce((accum, post) => {
      return accum + `<li>${post.title}</li>`;
    }, '');
    document.body.innerHTML = output;
  }, 1000);
}

/* demonstrating the serve sending back the resource for the get request before creating the post  */
createPost({
  title: 'Post Three',
  body: 'This is post three'
}, posts, getPosts);