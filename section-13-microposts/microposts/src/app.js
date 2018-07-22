// start fake api command: npm run json:server
import { http } from './http.js'

// get posts on DOM Load
document.addEventListener("DOMContentLoaded", getPosts);

const log = console.log;

function getPosts(url) {
  http
    .get(url)
    .then(response => log(response))
    .catch(err => log(err));
}

getPosts('http://localhost:3000/posts'); //
