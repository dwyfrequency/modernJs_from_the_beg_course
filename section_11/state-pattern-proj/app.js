const log = console.log;

const PageState = function (params) {
  let currentState = new homeState(this); // this pertains to the pagestate object created with new

  this.init = function (params) {
    this.change(new homeState());
  };

  this.change = function (state) {
    currentState = state;
  }
};

// : Home State
const homeState = function (page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
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
const aboutState = function (page) {
  document.querySelector
}

