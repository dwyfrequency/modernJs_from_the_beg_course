const log = console.log;
// SETS - Store unique values of any type (only value, not key => value)

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({ name: 'John' });
set1.add(true);
set1.add(100);
log(set1);

const set2 = new Set([1, true, 'string']); // other way to add values to a set is pass array
log(set2);

// Get count
log(set1.size);

// Check for values
log(set1.has(100)); // true
log(set1.has(50 + 50)); // true
log(set1.has({ name: 'John' })); // false - b/c object is not a primitive type so it is a reference object. Primitive vals are stored in the stack not the heap. primitive = stack | reference = heap. so when we do has or an === it returns false b/c they are both pointing to different locations in the heap

// Delete from set
set1.delete(100);
log(set1);

// Iterate through sets
// For...of
log('-=-=-=-=-=-=-=-=')
for (let item of set1) {
  log(item);
}
log('-=-=-=-=-=-=-=-=')

// forEach loop
log("==================")
set1.forEach((value) => {
  log(value);
});
log("==================")

// Convert set to array
const setArr = Array.from(set1);
log(setArr);
