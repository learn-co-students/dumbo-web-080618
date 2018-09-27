1. Add DOMContentLoaded event listener.
- This will execute all your code when the page loads.
- It should also add any event listeners for things ALREADY on the DOM (in your index.html)
- For elements we add to the DOM with JS, we can't add the event listeners here because they don't exist


2. Fetch some data and put things on the page
- make a fetch request
- pass then a callback with puts the results on the DOM
  - make sure to check if the results are an array (which requires iterating) or an object

3. To put things on page:

Create Element Way
- document.createElement for the outermost element
- add properties to it
- add innerHTML to it or create elements for any children elements
- add event listeners to it
- put it on the DOM
- if you haven't appended it, it isn't on the DOM

InnerHTML Way
- select the element from the page that you want to nest something inside
- set innerHTML of that element to += the html you want to add
- += means that you can add to the HTML without removing any previous HTML
- if you want to empty out HTML at any point, just set HTML = ''

4. Form submission
- If your form was in the index.html starter code, your event listener should have been added in DOMContentLoaded
- If your form is added by JS, add the event listener at the time you create the form and add it to the DOM
- To add an event listener
  - query select the form off the dom (if it is already there) or have a reference to the object
  - add a submit event listener to the form
- The callback this event listener executes should
  - PREVENT DEFAULT
  - get the needed values from the input
  - use a fetch request to send the values somewhere using POST or PATCH

5. Event Delegation (optional)
https://stackoverflow.com/a/1688293
- Instead of adding an event listener directly to an object, you can use event delegation
- You can add an event listener to the parent in your DOMContentLoaded event listener if the parent is in your index.html
- If your JS adds children to the parent later, the event listener will still hear any events to those children
- In your callback for event delegation, make sure to check if the target of the event is the actual element you want
- This callback will fire for the parent or ANY descendant of it
- Our increaseLikes is an example of event delegation
  - we listen on the div but only care about the button


