// start fake api command: npm run json:server
import { http } from './http'
import { ui } from './UI'

// get posts on DOM Load
document.addEventListener("DOMContentLoaded", getPosts);

const log = console.log;

function getPosts() {
  http
    .get('http://localhost:3000/posts')
    .then(response => ui.showPosts(response))
    .catch(err => log(err));
}
