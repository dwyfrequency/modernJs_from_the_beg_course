const log = console.log;

// : Maps are key-value pairs - can use any type of value as a key or value

const map1 = new Map();

// Set Keys
const key1 = 'some string',
  key2 = {},
  key3 = function () { };

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key
log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count values
log(map1.size);

// Iterating maps
// Loop using for...of to get keys and values
log('-=-=-=-=-=-=-=-=-')
for (let [key, value] of map1) {
  log(`${key} = ${value}`);
}
log('-=-=-=-=-=-=-=-=-')

// Iterate keys only
log('-=-=-=-=-=-=-=-=-')
for (let key of map1.keys()) {
  log(key);
}
log('-=-=-=-=-=-=-=-=-')

// Iterate values only
log('-=-=-=-=-=-=-=-=-')
for (let value of map1.values()) {
  log(value);
}
log('-=-=-=-=-=-=-=-=-')

log('-=-=-=-=-=-=-=-=-')
// Loop with forEach
map1.forEach(function (value, key) {
  log(`${key} = ${value}`);
});
log('-=-=-=-=-=-=-=-=-')

// Convert to arrays
// Create an array of the key value pairs
const keyValArr = Array.from(map1);
log(keyValArr);

// Create an array of the values
const valArr = Array.from(map1.values());
log(valArr);

// Create an array of the keys
const keyArr = Array.from(map1.keys());
log(keyArr);