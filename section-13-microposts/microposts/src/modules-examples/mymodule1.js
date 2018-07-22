// commonjs sytnax - whatever is put in the below can be available to other files
module.exports = {
  name: "Brad",
  email: "test@test.me",
  log (...args) {
    // pack all args into an array and unpack when called by inner function
    console.log(...args);
  }
}
