class Adapter {
  constructor(baseURL) {
    this.baseURL = baseURL
  }
  // Just makes a GET request to a URL
  get(path) {
    return fetch(path).then(res => res.json())
  }

  getDoggos() {
    return this.get(this.baseURL)
  }

  getSpecificDoggo(id) {
    return this.get(`${this.baseURL}/${id}`)
  }
}
