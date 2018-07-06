// FETCH API 
const log = console.log;

// Output for text
const output = document.querySelector('#output');

// Event listeners
document.querySelector('#button1').addEventListener('click', getText);
document.querySelector('#button2').addEventListener('click', getJSON);
document.querySelector('#button3').addEventListener('click', getExternal);


// ES6 version
// function getText() {
//   fetch('test.txt')
//     .then(resp => resp.text())
//     .then(txt => log(txt))
//     .catch(err => log(err));
// }

// Fetch from text file
function getText() {
  fetch('test.txt')
    .then(function(resp) {
        return resp.text(); // we can see this method on the proto
      })
    .then(function(txt) {
      output.innerHTML = `<p>${txt}</p>`;
      return log(txt)
    })
    .catch(function(err) {
      return log(err);
    });
}

// Get from json file
function getJSON() {
  fetch('posts.json') // resource
    .then(function(resp) {
      return resp.json(); // can see this method on the proto
    })
    .then(function(json) {
      const html = json
                      .reduce(function(accum, obj) {
                        return accum + `
                        <p>${obj.title}</p>
                        <p>${obj.body}</p><br>
                        `
                      }, '');
      output.innerHTML = html;
      log(json);
    })
    .catch(function(err) {
      log(err);
    })
}

// Get from external API
const endpoint = `https://api.github.com/users`;
function getExternal() {
  fetch(endpoint) // resource
    .then(function(resp) {
      return resp.json(); // can see this method on the proto
    })
    .then(function(json) {
      const html = json
                      .reduce(function(accum, obj) {
                        return accum + `
                        <li>${obj.login}</li>
                        `
                      }, '');
      log(html);
      output.innerHTML = html;
      log(json);
    })
    .catch(function(err) {
      log(err);
    })
}