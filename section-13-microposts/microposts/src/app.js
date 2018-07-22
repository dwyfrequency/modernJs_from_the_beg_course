// start fake api command: npm run json:server
import { http } from './http'
import { ui } from './UI'

// event listeners  
document.addEventListener("DOMContentLoaded", getPosts); // get posts on DOM Load

document.querySelector(".post-submit").addEventListener("click", submitPost); 

const log = console.log;

function getPosts() {
  http
    .get('http://localhost:3000/posts')
    .then(response => ui.showPosts(response))
    .catch(err => log(err));
}

function submitPost () {
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;

  // destructure values in new object ie same as title: title
  const data = {
    title,
    body
  }
  // log(data);

  // create post
  http.post("http://localhost:3000/posts", data)
      .then(data => getPosts()) // call get posts function to see all posts
      .catch(err => log(err));
}
