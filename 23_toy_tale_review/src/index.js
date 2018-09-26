// fetch
// patch/post
// dataset
// set attribute
// incrementing
// getting form data
// deleting form data

document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.querySelector('#new-toy-btn')
  const toyForm = document.querySelector('.container')
  let addToy = false

  // fetch some data and render things

 // get toys returns an array of toys
 // if we chain then onto it, the function then calls will receive those toys as an argument
  getToys()
    .then(showToys)

  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'
        const form = document.querySelector('form')
        // console.log(form)
        form.addEventListener('submit', submitForm)
      // submit listener here
    } else {
      toyForm.style.display = 'none'
    }
  })

  function submitForm(e) {
    event.preventDefault()
    const name_input = e.target.name
    const image_input = e.target.image
    console.log('form submitted')

    const data = {
      "name": name_input.value,
      "image": image_input.value,
      "likes": 0
    }

    createToy(data)
      .then(showToy)


    name_input.value = ''
    image_input.value = ''
  }

  function showToys(toys) {
    // take toys and put them on the page
    const collection = document.querySelector('#toy-collection')
    toys.forEach(toy => {
      // put toy on dom
      //created element
      const div = document.createElement('div')

      // added properties
      div.className = 'card'
      // div.setAttribute('data', `id: ${toy.id}`)
      // div.dataset.id = toy.id

      div.innerHTML = `<h2>${toy.name}</h2>
      <img src=${toy.image} class="toy-avatar">
        <p>${toy.likes} Likes </p>
          <button data-id=${toy.id} data-likes=${toy.likes} class="like-btn">Like <3</button>`
      div.addEventListener('click', increaseLikes)
          // append to DOM
      collection.append(div)
    })
  }
})

function showToy(toy) {
  const collection = document.querySelector('#toy-collection')

  const div = document.createElement('div')

  // added properties
  div.className = 'card'

  div.innerHTML = `<h2>${toy.name}</h2>
  <img src=${toy.image} class="toy-avatar">
    <p>${toy.likes} Likes <p>
      <button class="like-btn">Like <3</button>`

      // append to DOM
  collection.append(div)
}

function increaseLikes(event) {
  if (event.target.tagName === "BUTTON") {
    // patch request likes
    const button = event.target
    const parent = button.parentElement
    const likeEl = parent.querySelector('p')
    let likes = parseInt(event.target.dataset.likes)
    likeEl.innerText = `${likes + 1} Likes`
    event.target.dataset.likes = likes + 1
    const data = {
      "likes": likes + 1
    }
    updateLikes(data, event.target.dataset.id)
    .then(console.log)
  }
}




