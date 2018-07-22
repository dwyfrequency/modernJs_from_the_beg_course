// start fake api command: npm run json:server
import { http } from './http'
import { ui } from './UI'

// event listeners  
// get posts on DOM Load
document.addEventListener("DOMContentLoaded", getPosts); 

// listen for adding post
document.querySelector(".post-submit").addEventListener("click", submitPost);

// listen for edit state - need to do this b/c these fields are generated after dynamically after the dom content has loaded - so we need event delegation

document.querySelector("#posts").addEventListener("click", editPost);

// document.querySelector("#posts").addEventListener("click", deletePost);

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
      .then(data => {
        ui.showAlert("Post added", "alert alert-success");
        ui.clearFields();
        getPosts();
      }) // call get posts function to see all posts
      .catch(err => log(err));
}

function editPost(e) {
  // log(e);
  const data = {};
  if (e.target.parentElement.classList.contains("edit")) {
    const id = e.target.parentElement.dataset.id; // gets us the value for data-id
    const body = e.target.parentElement.previousElementSibling.textContent; // parentElement is the a tag, previous sibling is the element on the same level before itself
    const title = e.target.parentElement.parentElement.firstElementChild.textContent; // parentElement is the a tag, previous sibling is the element on the same level before itself

    const data = {
      id,
      title,
      body
    };

    // fill form inputs
    log("here", data);
    ui.fillForm(data);

  }
  e.preventDefault();
}
