const log = console.log;

const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingFor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/82.jpg"
  },
  {
    name: "Jen Smith",
    age: 26,
    gender: "female",
    lookingFor: "male",
    location: "Miami FL",
    image: "https://randomuser.me/api/portraits/women/82.jpg"
  },
  {
    name: "William Johnson",
    age: 38,
    gender: "male",
    lookingFor: "female",
    location: "Lynn MA",
    image: "https://randomuser.me/api/portraits/men/83.jpg"
  }
];

// profile iterator
function profileIterator (profiles) {
  let nextIndex = 0;

  return {

    next () {

      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } :
      { done: true };

    }
  };

}

// next profile function
function nextProfile () {

  const currentProfile = profiles.next().value;
  if (currentProfile) {

    document
      .querySelector("#profileDisplay")
      .innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
      </ul
    `;
    document.querySelector('#imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;

  } else {

    // if the current profile is undefined, we reload the page.
    window.location.reload();

  }

}

const profiles = profileIterator(data);
document
  .querySelector("#next")
  .addEventListener("click", nextProfile);
