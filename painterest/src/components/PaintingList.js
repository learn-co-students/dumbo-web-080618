import React, { Component } from 'react'

import PaintingCard from './PaintingCard'

import paintings from '../artworks.js'

export default class PaintingList extends Component {
  render() {
    const paintingCards = paintings.map(painting => { return <PaintingCard painting={painting} key={painting.slug}/> })

    return <div>
      {paintingCards}
    </div>
  }
}
