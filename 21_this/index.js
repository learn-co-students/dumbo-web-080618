// Original Functions

let eva = {
  name: 'eva',
  role: 'TCF',
  hobby: 'skydive',
  school: 'Flatiron'
}

// RULE 1 `this` within a `function` called on an object is that object

let gigi = {
  name: 'gigi',
  role: 'TCF',
  hobby: 'spelunk',
  afterWork: function afterWork(friend1, friend2) {
    return `After work I like to ${this.hobby} with ${friend1} and ${friend2}`
  },
  school: 'Grace Hopper'
}

// we can give gigi's function to eva
eva.afterWork = gigi.afterWork

// the function now has the this of eva because it is called on eva
eva.afterWork() // After work I like to skydive


// RULE 2`this` for a simple function call `fn()` will be the window object (browser) or the global object (Node).

afterWork = gigi.afterWork

// being called on global object which has no hobby property
afterWork() // After work I like to undefined


// RULE 4 `this` within a function called with `apply/call/bind` will be the object passed as the first parameter.

// function.apply(thisArg, [argsArray])
// the afterWork method on gigi can be invoked once on eva
// the eva object still doesn't have that method as a property
gigi.afterWork.apply(eva, ['niky', 'gigi']) // After work I like to skydive with Niky

// function.call(thisArg, arg1, arg2, ...)
// the afterWork method on gigi can be invoked once on eva
gigi.afterWork.call(eva, 'niky', 'gigi') // After work I like to skydive

// function.bind(thisArg[, arg1[, arg2[, ...]]])
// instead of immediately invoking, we save a references to the afterWork function bound to eva
evaStuff = gigi.afterWork.bind(eva) // returns function reference




// Arrow functions
// RULE: `this` iswhatever it is in the enclosing scope of where the arrow function was defined
let whoDis = () => {console.log(this)}
whoDis // returns Window


function whoDis2() {
  return () => {console.log(this)}
}

gigi.whoDis = whoDis2
gigi.whoDis() // () => {console.log(this)} the version of the function bound to gigi
gigi.whoDis()() // returns gigi
