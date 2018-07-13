const log = console.log;
let re;
re = /hello/; // regular expression literal /regex/
re = /hello/i; // i = case insensitive
// re = /hello/g; // Global search - gives us all instances of the string


// console.log(re); // returns expression literal defined
// console.log(re.source); // ignores the expression slashes(/) and just gives us what's inside

// exec() - Return result in an array or null
// const result = re.exec('brad hello world');
// console.log(result);
// console.log(result[0]); // exprsssion returned or null if no match
// console.log(result.index); // first index of the string where the match starts
// console.log(result.input);

// test() - Returns true or false
// const result = re.test('Hello');
// console.log(result);

// match() - Return result array or null
// const str = 'Hello There';
// const result = str.match(re); // with the global flag it just returns an array of the string matches else it returns an array with idX and a bunch of other stuff
// console.log(result);

// search() - Returns index of the first match if not found returns -1
// const str = 'Brad Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - Return new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);
