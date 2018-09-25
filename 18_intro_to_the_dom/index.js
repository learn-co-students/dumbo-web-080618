function snakeCase(str) {
  return str.toLowerCase().split(' ').join('_')
}

const items = [
  {
    name: 'Chainmail Coaster',
    price: '$40'
  },
  {
    name: 'Chainmail Earrings',
    price: '$25'
  },
  {
    name: 'Curves Ball',
    price: '$23'
  },
  {
    name: 'Dragonscale Bracelet',
    price: '$30'
  },
  {
    name: 'Flower Kusadama',
    price: '$50'
  },
  {
    name: 'Origami Star',
    price: '$12'
  },
  {
    name: 'Saying Pillow',
    price: '$27'
  },
  {
    name: 'Tardis Bookmark',
    price: '$30'
  }
]

document.addEventListener('DOMContentLoaded', () => {

  const cardContainer = document.getElementById("card-container")
  cardContainer.classList.add("ui", "cards") // added after lecture to fix CSS
  const card = document.createElement("div");
  const item = items[0];
  card.id = snakeCase(item.name)
  card.classList.add("ui", "card") //added after lecture to fix CSS
  card.innerHTML = `
    <div class="image">
      <img src='./images/${snakeCase(item.name)}.jpg'>
    </div>
    <div class="content">
      <span class="header">${item.name}</span>
      <div class="description">
        ${item.price}
      </div>
    </div>
  `
  cardContainer.append(card)
})



/*
<div class="ui card">
  <div class="image">
    <img src='./images/<image name>.jpg'>
  </div>
  <div class="content">
    <span class="header">Name</span>
    <div class="description">
      Price
    </div>
  </div>
</div>
*/
