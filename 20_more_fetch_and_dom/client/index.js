// Our Fetch Pattern

// fetching data from url
fetch(url)
// taking the response and turing the body data into JSON
  .then(r => r.json())
// do something with that response
// always console log first to check your data type
// once you know the data, use this callback to do whatever you need to with the data
  .then(doSomethingWithData)

document.addEventListener('DOMContentLoaded', () => {
  let brewList = document.querySelector('#brew-list')

  fetch(`http://localhost:3000/brews`)
    .then(resp => resp.json())
    .then(resp => {
      resp.brews.forEach((brew) => {
        const li = document.createElement('li')
        li.innerText = brew.blend_name
        brewList.append(li)
      })
    })
})

