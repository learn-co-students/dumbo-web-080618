
document.addEventListener("DOMContentLoaded", () => {


  const allDogUrl = "http://localhost:3000/pups"

  let filterOn = false


  fetchAllDogs()

  function fetchAllDogs(){
    const filterButton = document.querySelector("#good-dog-filter")
    filterButton.addEventListener('click', handleFilterClick)

    fetch(allDogUrl)
    .then(res => res.json())
    .then(res => dogFilter(res))
    .then(res => renderDogSpans(res))
  }

  function renderDogSpans(arr){
    let str = ""
    // span.dataset.id = dog.id
    arr.forEach(dog => str += `<span data-id='${dog.id}'>${dog.name}</span>`)
    const dogBar = document.querySelector("#dog-bar")
    dogBar.innerHTML = str
    dogBar.addEventListener('click', handleSpanClick)
  }

  function handleSpanClick(e){
    if (e.target.nodeName === "SPAN"){
      fetchDogProfile(e.target.dataset.id)
    }
  }

  function fetchDogProfile(id){
    let pupMainURL = allDogUrl + `/${id}`
    fetch(pupMainURL)
    .then(res => res.json())
    .then(res => renderProfile(res))
  }

  function renderProfile(dog){
    const dogProfile = document.querySelector("#dog-info")

    // let profile = ` <img src=${dog.image}>
    // <h2>${dog.name}</h2>
    // <button data-id=${dog.id}>${dog.isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>`

   // dogProfile.innerHTML = profile

    dogProfile.innerHTML = ""
    let image = document.createElement("img")
    image.src = dog.image
    let heading = document.createElement("h2")
    heading.innerText = dog.name
    let goodButton = document.createElement("button")
    goodButton.dataset.id = dog.id
    if (dog.isGoodDog){
      goodButton.innerText = "Good Dog!"
    } else {
      goodButton.innerText = "Bad Dog!"
    }

    goodButton.addEventListener('click', toggleGoodness)
    // console.log(dogProfile);
    dogProfile.append(image, heading, goodButton)
  }

  function toggleGoodness(e){
    if (e.target.innerText === "Good Dog!"){
      e.target.innerText = "Bad Dog!"
      patchDogGoodness(e.target.dataset.id, {isGoodDog: false})
    } else {
      e.target.innerText = "Good Dog!"
      patchDogGoodness(e.target.dataset.id, {isGoodDog: true})
    }
  }

  function patchDogGoodness(id, data){
    let pupMainURL = allDogUrl + `/${id}`
    return fetch(pupMainURL, {
      method: "PATCH",
      headers: {
            "Content-Type": "application/json"
        },
      body: JSON.stringify(data)
    }).then(res => res.json())
  }

  function dogFilter(arr){
    console.log(arr);
    return arr
  }

  function handleFilterClick(e){
    console.log(e);
    //check if button is On or Off
    if (e.target.innerText === "Filter good dogs: OFF"){
      e.target.innerText = "Filter good dogs: ON"
    // update filterOn variable
    // fetchAllDogs
  } else {
    e.target.innerText = "Filter good dogs: OFF"
  }
}


})
