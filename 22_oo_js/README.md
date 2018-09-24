## Object-Oriented JavaScript

### Objectives
- understand why we use object orientation
- create new instances of objects in ES5 and ES6 syntaxes
- make instance methods for JS classes
- make class methods for JS classes (e.g. filters and search functions)
- make private class variables using the ES6 class syntax, closures, and IIFEs


#### Factory Function
- any function which is not a class or constructor that returns a new object
- if it uses `new` it is not a factory function


### ES5
- `new` operator creates an instance of a user-defined object type
- `new` invokes the constructor function and within that function sets `this` to the new object


### ES6
- `class` keyword is syntactical sugar over JavaScript's existing prototype-based inheritance
- `constructor` method is a special method for initializing an object created with a class