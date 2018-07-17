const log = console.log;

function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe (fn) {

    this.observers.push(fn);
    log(`You are subscribed to ${fn.name}`); // prints the name of the function

  },
  unsubscribe (fn) {
    /*
     * Filter out from the list whatever matches the callback
     * function. If there is no match, the callback gets to stay
     * on the list. The filter returns a new list and reassigns
     * the list of observers.
     * */
    this.observers = this.observers.filter(f => f !== fn);
    log(`You are unsubscribed to ${fn.name}`); // prints the name of the function

  },

  fire () {

    this.observers.forEach(element => element.call());

  }
};

const click = new EventObserver();

log(click);

// elements
const sub_ms = document.querySelector(".sub-ms");
const unsub_ms = document.querySelector(".unsub-ms");
const sub_s = document.querySelector(".sub-s");
const unsub_s = document.querySelector(".unsub-s");
const fire = document.querySelector(".fire");

const getCurrentMilliseconds = () => {
  log(`Current Milliseconds ${new Date().getMilliseconds()}`);
}
const getCurrentSeconds = () => {
  log(`Current Seconds ${new Date().getSeconds()}`);
}

// event listener
sub_ms.addEventListener("click", () => click.subscribe(getCurrentMilliseconds));
unsub_ms.addEventListener("click", () => click.unsubscribe(getCurrentMilliseconds));
sub_s.addEventListener("click", () => click.subscribe(getCurrentSeconds));
unsub_s.addEventListener("click", () => click.unsubscribe(getCurrentSeconds));
fire.addEventListener("click", () => click.fire());
