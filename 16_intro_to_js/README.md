# Introduction to JavaScript

## JS What is Weird
- no implicit returns
- js very explicit
- js gives you fewer helpers than ruby
- semi-colons? are they a thing?
- {}
- functions within functions
- backticks, string interpolation
- hoisting
- keywords to define variables: let, const, var
- functional vs. block scope
- callbacks
- syntactically strict



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


### Variables and Hoisting
- let and const are block-scoped
  - blocks can include the bodies of if and case statements
  - a variable declared in the body of an if statement, can only be seen there
- var is function scoped
  - if a var is declared in an if statement, the entire function can see it
- var can be hoisted
  - the definition is lifted to the top of the file, but the assignment of a value to that variable is not
  - this means the variable is undefined for much of the file
- const and let are not hoisted
  - they will error if you attempt to use them on an earlier line than the one they are defined on

### 7 JavaScript Data Types
- strings
  - `${Math.random()}`
  - '' or ""
- numbers
  - integer: 4
  - float: 4.0
  - NaN
- boolean
  - true
    - []
    - {}
    - !!Object.keys({}).length // is object empty
  - false
    - ''
- undefined
  - has not been assigned a value yet
  - variable not assigned a value yet
  - functions return undefined when we don't give it an explicit return
- null
  - nothing, no value
- symbol
  - uncommon, new
  - may be used as object keys and values

## Type Coercion
JavaScript changes the type of a data type in order to perform some operation


### Primitives
Pass-by-value - when you declare a variable and pass it to a function, a *copy* of the variable is passed, not the original object in memory.
- number, string, symbol, null, undefined, boolean

### Non-Primitives
**Pass-by-reference**: when you declare a variable and pass it to a function, the object in memory itself is passed, not a copy of the object.
- objects

* Objects
  * Object literals
    - {key: value}
  * Accessing values
    - dot notation: works when we have the exact name
    - bracket notation: when we have a variable reference to the key name

* Function
  * MAJOR KEY ALERT: _functions always return undefined unless explicitly returning otherwise_. There is only one case of implicit returns in JavaScript and that's with one-line arrow functions without braces.

  * Functions are POJO's that can be executed/called! This means that you can add properties to functions just like you do POJO's.

* Array
    * More DIY than Ruby


### Doing Labs
* Tests run in Browser
* Tests automatically update when code is changed
* Use debugger with console open
* When in doubt, log it!

