const log = console.log;
let re;

// Literal Characters
re = /hello/;
re = /hello/i; // case insensitive

// Metacharacter Symbols
re = /^h/i; // begins with h
re = /d$/i; // ends with h
re = / world$/i; // ends with literal
re = /^world$/i; // must begin and end with world
re = /w.rld/i; // matches and ONE character
re = /w*rld/i; // matches any ONE character ZERO or MORE times
re = /gre?a?y/i; // optional character of 'e' or 'a'
re = /w?a?orld/i; // optional character of 'o' or 'a' : world will work as well as wrld b/c both optional
re = /\?/; // escape characters - for special characters

// brackets [] - Character Sets
re = /gr[ae]y/i; // must match one character in the brackets : better solution than our double ? example
re = /[GF]ray/; // must be uppercase G or F
re = /[^GF]ray/; // must NOT be uppercase G or F
re = /[^GF]ray/; // must NOT be uppercase G or F
re = /[A-Z]ray/; // match any uppercase letter
re = /[a-z]ray/; // match any lowercase letter
re = /[A-Za-z]ray/; // match any letter
re = /[0-9]ray/; // match any digit

// braces {} - Quantifiers
re = /Hel{2}o/; // matches if there are two l chars - must be exactly two
re = /Hel{2,4}o/; // matches if there are two to four l chars - must be between inclusive two and four
re = /Hel{2,}o/; // matches if there are at least two l chars

// Parentheses () - grouping
re = /[0-9]x{3}/;


// String to match
const str = '2xxx'; 
// const str = 'Hello';
// const str = "Gray";
// const str = '1ray';

const result = re.exec(str);
log(result);

reTest(re, str);

function reTest(re, str) {
  if (re.test(str)) {
    log(`${str} matched regex ${re.source}`);
  } else {
    log(`${str} does NOT match ${re.source}`);
  }
}