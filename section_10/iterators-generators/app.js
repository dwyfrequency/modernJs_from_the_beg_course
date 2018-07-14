// iterator example
function nameIterator (names) {

  let nextIndex = 0;

  // return an object with a next function
  return {
    next () {

      // if the array has anything in it, return an object with a value (updated array) and done property, else return an object with done being true
      return nextIndex < names.length ?
      { "value": names[nextIndex++], "done": false } :
      {"done" : true};

    }
  };

}

const log = console.log;

// create an array of names
const namesArr = ["Jack", "Jill", "John"];

// init iterator and pass in the names array
const names = nameIterator(namesArr);

log(names.next());
log(names.next());
log(names.next());
log(names.next());

// generator example - need to have star symbol to mark as a generator
function *sayNames () {

  yield "Jack";
  yield "Jill";
  yield "John";

}

const nameGen = sayNames();

log(nameGen);
log(nameGen.next()); // each time we call next we get an object ({value: "Jack", done: false})
log(nameGen.next().value);
log(nameGen.next().value);
log(nameGen.next()); // { done: true }

// id creator - generator 
function *createIds () {

  let index = 1;
  while (true) {

    yield index++;

  }

}

// this line essentially instantiates our generator
const gen = createIds();
// each time we call it we get a new id
log(gen.next().value);
