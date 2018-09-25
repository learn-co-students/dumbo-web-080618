/*global Adapter, Doggo*/

const URL = 'http://localhost:3000/pups'

document.addEventListener('DOMContentLoaded', () => {
  const adapter = new Adapter(URL)

  adapter.getDoggos()
    .then((pupList) => {
      const dogBar = document.querySelector('#dog-bar')
      pupList.forEach(pup => {
        const pupObj = new Doggo(pup)
        pupObj.renderSpan()
      })
    })
})
