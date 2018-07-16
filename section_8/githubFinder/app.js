const log = console.log;

// Init github
const github = new Github();
// Init ui 
const ui = new UI();

// Search input 
const searchUser = document.querySelector("#searchUser");

// Search input event listener 
searchUser.addEventListener("keyup", e => {
  // Get input text
  const userText = e.target.value;

  if(userText !== "") {
    github
      .getUser(userText)
      .then(data => {
        // log(data); // object of our user profile and their repos
        if(data.profile.message === "Not Found") {
          // Show alert
          ui.showAlert("User not found", "alert alert-danger");
        } else {
          // Show profile
          ui.showProfile(data.profile);
          // Show repos
          ui.showRepos(data.repos);
        }
      });
  } else {
    // Clear profile - when input is cleared
    ui.clearProfile();
  } 
})
// log(searchUser);

// log(github.Keys);