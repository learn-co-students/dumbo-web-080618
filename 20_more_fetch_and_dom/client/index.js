document.addEventListener('DOMContentLoaded', () => {
  let brewList = document.querySelector('#brew-list')

  fetch(`http://localhost:3000/brews`)
    .then(resp => resp.json())
    .then(resp => {
      resp.brews.forEach((brew) => {
        const li = document.createElement('li')
        li.innerText = brew.blend_name
        li.classList.add('brew')
        brewList.append(li)
      })
    })
})

