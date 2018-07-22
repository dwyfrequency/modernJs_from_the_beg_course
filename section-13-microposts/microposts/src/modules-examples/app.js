/* when you are requiring a node module no need for path, with custom file must specify direct path */
// const person = require("./mymodule1.js"); // CommonJS module syntax
// person.log(person.name, person);

// : ES2015 Module
/* 
import { person, log, acctBalance } from "./mymodule2.js";
log(person);
log(acctBalance());
*/

// : ES2015 Module - bring everything in at once
// import * as mod from "./mymodule2";
// mod.log(mod.person);
// mod.log(mod.acctBalance());

// : ES2015 Module - if you see export without curly braces {}, this means it is the default export
// import addTwo from "./mymodule2";
// console.log(addTwo(4));

import doubler from "./mymodule2";
console.log(doubler(8)); // same as prev example, we just renamed the default export