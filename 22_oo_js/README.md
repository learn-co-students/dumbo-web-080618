## Object-Oriented JavaScript

### Why OO
- create relationships can interact
- modularize
- established a pattern that others are aware of and can work in

### Objectives
- understand why we use object orientation
- create new instances of objects in ES5 and ES6 syntaxes
- make instance variables
- make instance methods
- make class methods
- make class variables
- Review closures and IIFEs


#### Making Objects By Hand
- slow and not DRY
- there has to be a better way


#### Factory Function
- any function which is not a class or constructor that returns a new object
- if it uses `new` it is not a factory function


#### ES5
- `new` operator + function creates an instance of a specific object type
- `new` invokes the constructor function and within that function sets `this` to the new object
- use prototypes to share methods across objects
  - each object has a prototype object, which acts as a template object that it inherits methods and properties from. An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as a prototype chain.


#### ES6
- `class` keyword is syntactical sugar over JavaScript's existing prototype-based inheritance
- `constructor` method is a special method for initializing an object created with a class