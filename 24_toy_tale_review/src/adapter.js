function getToys() {
  // fetch data
  return fetch('http://localhost:3000/toys')
    .then(r => r.json())
}

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