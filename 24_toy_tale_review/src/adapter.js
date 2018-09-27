function getToys() {
  // fetch data
  const url = 'http://localhost:3000/toys'
  return fetch(url)
    .then(r => r.json())
}

// for posts/patches give fetch a second argument of an object including method, headers and body
function createToy(data) {
  const url = 'http://localhost:3000/toys'
  return fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then(r => r.json())
}

function updateLikes(data, id) {
  const url = `http://localhost:3000/toys/${id}`
  return fetch(url, {
      method: "PATCH", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then(r => r.json())
}

function deleteToy(id) {
  const url = `http://localhost:3000/toys/${id}`
  return fetch(url, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
  })
    .then(r => r.json())
}