const http = new easyHTTP();
// log(http);

// Get Posts
const postsUrl = `https://jsonplaceholder.typicode.com/posts`
// http.get(postsUrl, (err, posts) => {
//   if(err) {
//     log(err);
//   } else {
//     log(posts);
//   }
// });

// Get single post
// const postUrl = `https://jsonplaceholder.typicode.com/posts/1`
// http.get(postUrl, (err, post) => {
//   if (err) {
//     log(err);
//   } else {
//     log(post);
//   }
// });

// Create Data for post
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
}

// Create Post
// http.post(postsUrl, data, (err, post) => {
//   if (err) {
//     log(err);
//   } else {
//     log(post);
//   }
// });

// Update Post - Put
const deleteUrl = `https://jsonplaceholder.typicode.com/posts/1`
http.delete(deleteUrl, (err, post) => {
  if (err) {
    log(err);
  } else {
    log(post);
  }
});

// Delete Post - Delete