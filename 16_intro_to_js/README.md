# Introduction to JavaScript

## JS What is Weird


### History of JavaScript
* Early Days
  * Created by Brandon Eich at Netscape in 10 days in 1995
  * Was not a highly respected programming language for about 10 years
  * Based off of functional languages with some object-oriented patterns
  * Applications like Google Maps and Gmail were where JavaScript shone again
* Standards
  * The standard for JavaScript implementations is called ECMAScript
  * The standard is updated yearly and the standard for that year is called ECMAScript 20xx (or ES 20xx)
  * [Browser Wars](https://en.wikipedia.org/wiki/Browser_wars) still leave us with legacy JavaScript implementations (and weirdness)
  * We can use transpiling to write JavaScript according to the standard we want and convert it to code that can be used for the majority of JavaScript applications

### Review Request-Response Cycle
* Request-Response lifecycle
* In the browser
* How to write JS for the browser
* Browser engines and DOM


### 7 JavaScript Data Types


### Primitives
Pass-by-value - when you declare a variable and pass it to a function, a *copy* of the variable is passed, not the original object in memory.


### Non-Primitives
**Pass-by-reference**: when you declare a variable and pass it to a function, the object in memory itself is passed, not a copy of the object.

* Objects
  * Object literals
  * Accessing values
  

* Function
  * MAJOR KEY ALERT: _functions always return undefined unless explicitly returning otherwise_. There is only one case of implicit returns in JavaScript and that's with one-line arrow functions without braces.

  * Functions are POJO's that can be executed/called! This means that you can add properties to functions just like you do POJO's.

* Array
    * More DIY than Ruby

### Type Checking


### Doing Labs
* Tests run in Browser
* Tests automatically update when code is changed
* Use debugger with console open
* When in doubt, log it!