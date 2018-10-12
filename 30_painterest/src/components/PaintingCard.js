import React, { Component } from 'react'

class PaintingCard extends Component {
  render() {
    // console.log('For this painting, we got', this.props.painting)
    const { image, title, collecting_institution, artist } = this.props.painting
    // console.log(artist)
    return( <div>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{artist.name}</p>
      <p>{collecting_institution}</p>
      </div>)
  }
}

export default PaintingCard
