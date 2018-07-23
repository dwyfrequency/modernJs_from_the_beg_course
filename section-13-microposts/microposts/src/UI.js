class UI {
  constructor () {
    this.posts = document.querySelector("#posts"); // div below form
    this.titleInput = document.querySelector("#title"); // title form input
    this.bodyInput = document.querySelector("#body");
    this.idInput = document.querySelector("#id");
    this.postSubmit = document.querySelector(".post-submit");
    this.forState = "add";
    this.postsContainer = document.querySelector(".postsContainer");
  }

  // add all posts to the ui
  showPosts (posts) {
    const output = posts.reduce((accum, post) => {
      return accum + `
        <div class="card mb-3">
          <div class="card-body">
            <h4 class="card-title">${post.title}</h4>
            <p class="card-text">${post.body}</p>
            <a href="#" class="edit card-link" data-id="${post.id}">
              <i class="fa fa-pencil"></i>
            </a>
            <a href="#" class="delete card-link" data-id="${post.id}">
              <i class="fa fa-remove"></i>
            </a>
          </div>
        </div>
      `;
    }, "");
    this.posts.innerHTML = output;
  }

  // display alert message
  showAlert (message, className) {
    this.clearAlert();

    // create div 
    const div = document.createElement("div");
    // add classes 
    div.className = className;
    // add text
    div.appendChild(document.createTextNode(message));
    // take parent postContainer, insert created div before the posts section
    this.postsContainer.insertBefore(div, this.posts);

    // timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // clear alert message
  clearAlert () {
    const currentAlert = document.querySelector(".alert");
    if(currentAlert) { 
      currentAlert.remove(); 
    };
  }

  // clear form fields
  clearFields () {
    this.titleInput.value = "";
    this.bodyInput.value = "";
  }

  // fill form to edit
  fillForm (data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;

    this.changeFormState("edit");
  }

  // clear id hidden value
  clearIdInput () {
    this.idInput.value = "";
  }

  changeFormState (stateType) {
    if (stateType === "edit") {
      this.postSubmit.textContent = "Update Post"; // changes submit button text
      this.postSubmit.className = "post-submit btn btn-warning btn-block"; // changes submit button color to orange - eventhough we only want to add one class, with className we have to input the whole string of all the classes

      // create cancel button
      const cancelBtn = document.createElement("button");
      cancelBtn.className = "post-cancel btn btn-light btn-block";
      cancelBtn.appendChild(document.createTextNode("Cancel Edit"));

      // get parent
      const cardForm = document.querySelector(".card-form");
      // get sibling
      const cardEnd = document.querySelector(".form-end");

      // insert cancel button at the end of the form
      cardForm.insertBefore(cancelBtn, cardEnd);
    } else {
      this.postSubmit.textContent = "Post it"; // changes submit button text
      this.postSubmit.className = "post-submit btn btn-primary btn-block";

      // remove cancel btn if there
      const cancelBtn = document.querySelector(".post-cancel");
      if(cancelBtn) {
        cancelBtn.remove();
      }
      // clear id from hidden field
      this.clearIdInput();
      // clear text
      this.clearFields();
    }
    this.forState = stateType;
  }
}

export const ui = new UI();