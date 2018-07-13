const log = console.log;
let re;

// Literal Characters
re = /hello/;
re = /hello/i; //case insensitive

// Metacharacter Symbols
re = /^h/i; // begins with h 
re = /d$/i; // ends with h 
re = / world$/i; // ends with literal  
re = /^world$/i; // must begin and end with world  
re = /w.rld/i; // matches and ONE character  
re = /w*rld/i; // matches any ONE character ZERO or MORE times 
re = /gre?a?y/i; // optional character of 'e' or 'a'
re = /w?a?orld/i; // optional character of 'o' or 'a' : world will work as well as wrld b/c both optional
re = /\?/ // Escape characters - for special characters


// String to match 
const str = 'Hello World';

const result = re.exec(str);
log(result);

function reTest(re, str) {
  if(re.test(str)) {
    log(`${str} matched regex ${re.source}`);
  } else {
    log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);
