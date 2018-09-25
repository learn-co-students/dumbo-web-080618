document.addEventListener('DOMContentLoaded', () => {
  let brewList = document.querySelector('#brew-list')

  fetchBrews()
    .then(makeBrews)

  // takes brew data and puts it on the dom
  function makeBrews(data) {
    let brews = data.brews
    brews.forEach(brewListItem)
  }

  // puts a single brew on the dom
  function brewListItem(brew) {
    const li = document.createElement('li')
    li.innerText = brew.blend_name
    li.classList.add('brew')
    li.dataset.id = brew.id
    // add an event listener where you know the element exists
    brewList.append(li)

    // adds an event listener to the brew item which will fetch full data for that brew
    li.addEventListener('click', (e) => {
      let id = e.target.dataset.id

      fetchSingleBrew(id)
        .then(showBrew)
      }
    )
  }

  // takes brew detail and puts it on the detail section
  function showBrew(brew) {
    let detail = document.querySelector('#brew-detail')
    // updating dom using inner html
    detail.innerHTML = `<h1 class='${brew.blend_name}'>${brew.blend_name}</h1>`
    detail.innerHTML += `<p>${brew.origin}</p><p>${brew.notes}</p><p>${brew.strength}</p>`
    // updating dom using create element
    // let h = document.createElement('h1')
    // h.innerText = brew.blend_name
    // console.log(typeof h)
    // let p1 = document.createElement('p')
    // p1.innerText = brew.origin
    // let p2 = document.createElement('p')
    // p2.innerText = brew.notes
    // let p3 = document.createElement('p')
    // p3.innerText = brew.strength
    // detail.append(h, p1, p2, p3)
  }

})


