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

