class Doggo {
  constructor(dog, adapter) {
    this.name = dog.name
    this.isGoodDog = dog.isGoodDog
    this.image = dog.image
    this.id = dog.id
    this.adapter = adapter
  }

  span() {
    const dogSpan = document.createElement('span')
    dogSpan.innerText = this.name
    dogSpan.addEventListener('click', () => this.renderPupInfo())
    return dogSpan
  }

  renderSpan() {
    const dogBar = document.querySelector('#dog-bar')
    dogBar.appendChild(this.span())
  }

  renderPupInfo() {
    const dogInfo = document.querySelector('#dog-info')
    dogInfo.innerHTML = `
      <img src=${this.image}>
      <h2>${this.name}</h2>
      <button>${this.isGoodDog ? "Good" : "Bad"} Dog!</button>
      `
      const button = dogInfo.querySelector('button')
      button.addEventListener('click', (e) => this.toggleButton(e))
  }

  toggleButton(e) {
    this.isGoodDog = !this.isGoodDog
    this.renderPupInfo()
    this.adapter.patchPup(id, pupBody)
  }

}
