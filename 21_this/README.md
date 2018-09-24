# This in JavaScript

![](https://media.giphy.com/media/3o7buirYcmV5nSwIRW/giphy.gif)

## Objectives

- Answer Dan Abramov's [question](https://twitter.com/dan_abramov/status/790858537513656320)
- Leverage Ruby's `self` to frame our JS `this` conversation (will get us 40% of the way)
- Recognize and value the differences
- Understand how we might be able to leverage `this` in JavaScript
- When is the value of `this` set? When is it **NOT** set?

---

### The 4 JS environment rules that govern `this`

1.  `this` within a `function` called within a particular context (i.e. `Object.method()`) will be the context/object (**assuming that function was declared with the `function` keyword**):

---

2.  `this` for a simple function call `fn()` will be the window object (browser) or the global object (Node). If we are in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) `this` will be `undefined`. (**There are different rules for arrow functions that will be discussed later**)

---

3.  `this` within a constructor function called with the keyword `new` in front will point to the newly created object:å
  - Note that **we cannot use the `new` keyword for arrow functions**.
  - [MDN Article on the `new` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)

---

4. `this` within a function called with `apply/call/bind` will be the object passed as the first parameter:

---

- Arrow functions will maintain their lexical scope when evaluating `this`. In other words, `this` will be **whatever it is in the arrow functions enclosing scope**.

- Unlike functions declared with the `function` keyword, arrow functions are much more predictable because arrow functions do not create their own `this` during execution. Instead, they 'absorb' or 'remember' whatever `this` was in their enclosing scope.

- "An arrow function does not have its own `this`; the `this` value of the enclosing _lexical context_ is used i.e. Arrow functions follow the normal variable lookup rules. So while searching for `this` which is not present in current scope they end up finding `this` from its enclosing scope" - [MDN Article on Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

- Please note that we cannot, and should not, use `bind`, `call`, and `apply` on an arrow function. The purpose of these functions is to **fix** the value of `this` to a particular object. Arrow functions will already have `this` fixed to their enclosing lexical scope.

- This makes arrow functions unsuitable for methods defined on an object.

---

## External Resources

- [Strict Mode in JS](https.
  //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- [MDN `this` article](https.
  //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [MDN `new` Operator](https.
  //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [MPJ JS This Keyword](https://www.youtube.com/watch?v=GhbhD1HR5vk)
- [MDN Arrow Function Article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN On Why Arrow Functions Help Us leverage `this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#No_separate_this)