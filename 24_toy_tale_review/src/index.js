document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.querySelector('#new-toy-btn')
  const toyForm = document.querySelector('.container')
  let addToy = false

 // get toys returns an array of toys
 // if we chain then onto it, the function then calls will receive those toys as an argument
  getToys()
    .then(showToys)

  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'
      // select the form element from the DOM and add an event listener to it
      const form = document.querySelector('form')
      form.addEventListener('submit', submitForm)
    } else {
      toyForm.style.display = 'none'
    }
  })
})

function showToys(toys) {
  // take toys, iterate through them and put them on the page
  const collection = document.querySelector('#toy-collection')

  // use the same function to render toys on the DOM whether they are put
  // on the DOM for our initial page load or added later
  toys.forEach(showToy)
}

function showToy(toy) {
  // adding things to the DOM

  // select the container element we want to append into
  const collection = document.querySelector('#toy-collection')

  // create our new element
  const div = document.createElement('div')

  // add properties to our new element
  div.className = 'card'
  div.innerHTML = `<h2>${toy.name}</h2>
    <img src=${toy.image} class="toy-avatar">
    <p>${toy.likes} Likes </p>
    <button data-id=${toy.id} data-likes=${toy.likes} class="like-btn">Like <3</button>`
  div.addEventListener('click', increaseLikes)

      // append to DOM
  collection.append(div)
}

function increaseLikes(event) {
  // this is event delegation
  // our listener is on an element which contains the one we want to listen for
  // we need to write logic to make sure our code only executes if the right thing is clicked
  if (event.target.tagName === "BUTTON") {

    // here we optistically update likes
    // this means we update the DOM before our PATCH request goes through
    const button = event.target
    const parent = button.parentElement
    const likeEl = parent.querySelector('p')
    const likes = parseInt(event.target.dataset.likes) + 1
    likeEl.innerText = `${likes} Likes`
    event.target.dataset.likes = likes

    // patch request likes
    const data = {
      "likes": likes
    }
    updateLikes(data, event.target.dataset.id)
  }
}

function submitForm(e) {
  event.preventDefault()
  // grab the values from the inputs
  // these inputs are properties of the form
  const name_input = e.target.name
  const image_input = e.target.image

  // assemble our data to POST
  const data = {
    "name": name_input.value,
    "image": image_input.value,
    "likes": 0
  }

  // POST our data THEN put the new toy on the page
  createToy(data)
    .then(showToy)

  // empty out our form inputs
  name_input.value = ''
  image_input.value = ''
}






