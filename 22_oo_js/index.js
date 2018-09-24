// Making objects by hand

let tcf1 = {
  name: 'eva',
  role: 'TCF',
  hobby: 'skydiving'
}

let tcf2 = {
  name: 'gigi',
  role: 'TCF',
  hobby: 'spelunking'
}

// Factory Function
function instructorFactory(name, role, hobby) {
  // one way to create an object and return it
  // let obj = {}
  // obj.name = name
  // obj.role = role
  // obj.hobby = hobby
  // obj.afterWork = function() {
  //   return `After work I like ${this.hobby}`
  // }
  // return obj

  // another way to return a new object
  return {
    name: name,
    role: role,
    hobby: hobby,
    afterWork: afterWork
  }

  // fancy destructuring! so hip and modern!
  // return {name, role, hobby, afterWork}
}

function afterWork() {
  return `After work I like ${this.hobby}`
}

let gigi = instructorFactory('gigi', 'tcf', 'spelunking')


// Prototypes
// each object has a 'prototype'.
// if you call a property that doesn't exist on an object, JS will look at its prototype to try to access the property there
let animal = {alive: true, hungry: 'sometimes', name: 'animal'}

let mammal = Object.create(animal)
mammal.name = 'mammal'
let dog = Object.create(mammal)
dog.name = 'dog'
dog.hungry = 'sometimes'

dog.alive // true

// if dog has the property, the prototype is ignored
dog.hungry // sometimes



// ES5 (constructor + prototype)
// `this` within a constructor function called with the keyword `new` in front will point to the newly created object
function Instructor(name, role, hobby) {
  this.name = name
  this.role = role
  this.hobby = hobby
  this.afterWork = afterWork
}

// use prototypes to share methods across all instances in a class
Instructor.prototype.whoDis = function() {
  return `I am ${this.name} and I like ${this.hobby}`
}

let eva = new Instructor('eva', 'tcf', 'cow tipping')


// ES6
let Instructor = (function () {
  let all = []

  return class Instructor {
    constructor(name, role, hobby) {
      this.name = name
      this.role = role
      this.hobby = hobby
      this.afterWork = afterWork
      all.push(this)
    }

    whoDis() {
      return `I am ${this.name} and I like ${this.hobby}`
    }

    static all() {
      //return a copy of all so that no one can edit the reference to the real version
      return all.slice()

      // spread operator! fancy new syntax!
      // return [...all]
    }

    static count() {
      return all.length
    }
  }
})()

let eva = new Instructor('eva', 'tcf', 'cow tipping')
