const log = console.log;

/*  for this keyword
    when the method is a property of the object, this refers to that object. So constructor functions generated with new and regular objects apply
    when it is just a function this applies to the global(window) object 
    if you have a callback function for one of your methods. The callback is not a property of the object so this is on the window.
    If you want the callback have the same this, you can create and pass in that or use arrow functions*/

// : Home State
const HomeState = function (page) {

  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
  `;

};

// About State
const AboutState = function (page) {

  document.querySelector("#heading").textContent = "About Us";
  document.querySelector("#content").innerHTML = `
    <p>This is the about page</p>
  `;

};

// Contact State
const ContactState = function (page) {

  document.getElementById('heading').textContent = 'Contact Us';
  document.getElementById('content').innerHTML = `
    <form action="">
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;

};


const PageState = function () {

  // let currentState = new HomeState(this); // this pertains to the pagestate object created with new

  this.init = function () {
    this.change(new HomeState());
  };

  this.change = function (state) {
    this.currentState = state;
  }

  this.init(); // initializes the PageState to the homepage

};

// : Instantiate pageState
const page = new PageState();

// : UI Vars
const home = document.getElementById('home'),
  about = document.getElementById('about'),
  contact = document.getElementById('contact');

// : Home
home.addEventListener('click', e => {
  page.change(new HomeState());

  e.preventDefault();
});

// : About
about.addEventListener('click', e => {
  page.change(new AboutState());

  e.preventDefault();
});

// Contact
contact.addEventListener('click', (e) => {
  page.change(new ContactState());

  e.preventDefault();
});
