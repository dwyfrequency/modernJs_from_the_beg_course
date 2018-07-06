// UPDATED LESSON 4 CODE WITH PROMISES

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

function createPost(post, posts) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      posts.push(post);
      resolve(posts);
    }, 2000);
  });
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
createPost({title: 'Post Three', body: 'This is post three'}, posts)
  .then(getPosts);