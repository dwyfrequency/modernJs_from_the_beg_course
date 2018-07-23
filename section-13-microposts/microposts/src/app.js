/* 
start webpack and babel command: npm start
// start fake api command: npm run json:server
// when you want to ship the code command: npm run build
// when loading to a server send the build folder for the js code, the index html, and the assets folder for css/any images. 
That's it, webpack will bundle all the js files and babel will translate
*/
import { http } from './http'
import { ui } from './UI'

// event listeners  
// get posts on DOM Load
document.addEventListener("DOMContentLoaded", getPosts); 

// listen for adding post
document.querySelector(".post-submit").addEventListener("click", submitPost);

// listen for edit state - need to do this b/c these fields are generated after dynamically after the dom content has loaded - so we need event delegation

// edit post
document.querySelector("#posts").addEventListener("click", editPost);

// cancel edit state - b/c cancel btn is dynamically added, we must use event delagation on parent element
document.querySelector(".card-form").addEventListener("click", cancelEdit);

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
  const id = document.querySelector("#id").value;

  // destructure values in new object ie same as title: title
  const data = {
    title,
    body
  };

  // validate input - any blank fields, display warning and dont submit
  if(title === "" || body === "") {
    ui.showAlert("Please fill in all fields", "alert alert-danger");
  } else {
    /* to check whether we are adding or updating > 
    if there is an id value in the hidden field then it is an update else add */
    if (id) {
      // Update post - b/c there is an id 
      http.put(`http://localhost:3000/posts/${id}`, data)
        .then(data => {
          ui.showAlert("Post updated", "alert alert-success");
          ui.changeFormState("add");
          getPosts();
        }) // call get posts function to see all posts
        .catch(err => log(err));
    } else {
      // Add post - create post b/c there is nothin in id
      http.post("http://localhost:3000/posts", data)
        .then(data => {
          ui.showAlert("Post added", "alert alert-success");
          ui.clearFields();
          getPosts();
        }) // call get posts function to see all posts
        .catch(err => log(err));
    }


  }


}

function editPost(e) {
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
    ui.fillForm(data);

  }
  e.preventDefault();
}

// cancel edit state
function cancelEdit(e) {
  if (e.target.classList.contains("post-cancel")) {
    ui.changeFormState("add");
  }
  e.preventDefault();
}
