const log = console.log;

// create Symbol - b/c it is an actual primitive value there is no need for a constructor (ie no need for new keyword)
// const sym1 = Symbol();
// const sym2 = Symbol("sym2");
// log(sym1); // : Symbol()
// log(typeof sym1); // symbol - by it just returning symbol, shows us it is a primitive data value
// log(sym2); // : Symbol(sym2)

// // no two symbols are the same
// log(Symbol('123') === Symbol('123')); // false

// log(`Hello ${sym2.toString()}`);

const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};
// whenever you set a variable as a key you want to use brackets [] or else with the . it will see it as a property and wont be translated to the underlying values 
myObj[KEY1] = "Prop1";
myObj[KEY2] = "Prop2";

log(myObj[KEY1], myObj[KEY2]);

// : Symbols are not enumerable in for...in loops : we can see in the output it's ignored
for (let i in myObj) {
  log(`${i}: ${myObj[i]}`);
}

log('hi');

// : Symbols are ignored by JSON.stringify
// JSON.stringity ignores symbols
log(JSON.stringify({ key: 'prop' })); // {"key":"prop"}
log(JSON.stringify({ [Symbol('sym1')]: 'prop' })); //{}