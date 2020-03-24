// // Initial example of an object file
// const person =  {
//   name: 'Andy Le',
//   age: 20
// }

// Class example
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`)
  }
}

// Export class to use elsewhere (index.js)
module.exports = Person;
