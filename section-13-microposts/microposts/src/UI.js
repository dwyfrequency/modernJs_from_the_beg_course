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
  }

  clearAlert () {}

  clearFields () {
    this.titleInput.value = "";
    this.bodyInput.value = "";
  }
}

export const ui = new UI();