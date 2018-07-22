class UI {
  constructor () {
    this.posts = document.querySelector("#posts"); // div below form
    this.titleInput = document.querySelector("#title"); // title form input
    this.bodyInput = document.querySelector("#body");
    this.idInput = document.querySelector("#id");
    this.postSubmit = document.querySelector(".post-submit");
    this.forState = "add";
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
}

export const ui = new UI();