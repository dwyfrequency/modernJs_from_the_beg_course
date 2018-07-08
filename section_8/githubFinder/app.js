const log = console.log;

// Init github
const github = new Github();
// Init ui 
const ui = new UI();

// Search input 
const searchUser = document.querySelector('#searchUser');

// Search input event listener 
searchUser.addEventListener('keyup', e => {
  // Get input text
  const userText = e.target.value;

  if(userText !== '') {
    github
      .getUser(userText)
      .then(data => {
        log(data);
        if(data.profile.message === 'Not Found') {
          // Show alert
          log(`Info not found anywhere. Sad!`)
        } else {
          // Show profile
          ui.showProfile(data.profile);
        }
      });
  } else {
    // Clear profile
    
  } 
})
// log(searchUser);

// log(github.Keys);