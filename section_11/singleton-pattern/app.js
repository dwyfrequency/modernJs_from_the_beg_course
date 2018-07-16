const log = console.log;

/* : Singleton pattern - is a manifistation of the module pattern. Singleton Obj is an immediate anon funct that can only return one obj at a time. Repeated calls to the constructor will just return the same instance. 
Ex. if you only want one user object at a time, say creating a user. Only want one session to be able to create a user account at a time  
Programmers are not stoked on this. */

// es6
const Singleton = (() => {
  let instance; 
  const createInstance = () => {
    const obj = new Object({ name: "walrus" });
    return obj;
  }

  return ({
    getInstance() {
      if(!instance) {
        instance = createInstance();
      }
      return instance;
    }
  })
})();

const instanceA = Singleton.getInstance();
const instanceG = Singleton.getInstance();
log(instanceA); // { name: 'walrus' }
log(instanceG); // { name: 'walrus' }
log(instanceA === instanceG); // true - it is the same instance of the object

