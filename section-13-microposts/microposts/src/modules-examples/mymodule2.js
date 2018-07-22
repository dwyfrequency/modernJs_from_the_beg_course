// es 2015 modules
export const person = {
  name: "John",
  age: 30
};

export const log = console.log;

export function acctBalance () {
  return "probs not high";
}

const addTwo = x => x + 2; 
// export default const addTwo = x => x + 2;  // cant do this b/c You're trying to export a default and declare a variable at the same time, which is invalid syntax. https://stackoverflow.com/questions/34676984/cannot-export-const-arrow-function
export default addTwo;