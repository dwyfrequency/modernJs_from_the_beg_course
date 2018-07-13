const log = console.log;

try {
  // Produce a referenceError
  myFunction();
} catch(e) {
  log(e);
}

log('Program continues...')
