// our adapter gets data from our API and returns it so other functions can use it

function fetchBrews() {
  return fetch(`http://localhost:3000/brews`)
    .then(resp => resp.json())
}

function fetchSingleBrew(id) {
  return fetch(`http://localhost:3000/brews/${id}`)
    .then(r=> r.json())
}
