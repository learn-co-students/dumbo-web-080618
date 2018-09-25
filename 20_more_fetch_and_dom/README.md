# Goals
- code structure
- more fetching
  - promises, callbacks
- more rendering / putting elements on the DOM
- removing elements from the dom
- creating classes
- most often used dom manipulation methods
  - grab element, setting innerHTML
  - create element and append to DOM

## Deliverable
- click on a brew
  - figure out which coffee it is
  - get data from that coffee show page
- show full detail information about a brew

### Fetch
- newer interface with simpler syntax
- returns a Promise
  - waiting for something and then performing a function
  - built in error handling
- `The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.`

### .Then
- use `then` to handle a promise
- `then` takes a callback as an argument, and executes that callback when the promise has resolved
- every `then` returns another promise
  - we can chain `then`s onto each other
  - each `then` gets the return value of the previous `then`'s callback

## The Fetch Pattern
- call `fetch` with a url as an argument
  - returns a promise with the response
- first `then` turns response data into json so we can use it
  - it returns a promise with the JSON data
- second `then` does some work with that data
  - console.log it first to check your data structure
  - your actual code will put it on the DOM

```
// fetching data from url
fetch(url)
// taking the response and turing the body data into JSON
  .then(r => r.json())
// do something with that response
// always console log first to check your data type
// once you know the data, use this callback to do whatever you need to with the data
  .then(doSomethingWithData)
```

## How to Put Things on the DOM
#### Create Element Way
1. create an element
2. add some properties to it
3. add any event listeners to it (optional)
4. append to DOM

#### Inner HTML Way
1. find something ALREADY on the DOM
2. set its inner HTML





