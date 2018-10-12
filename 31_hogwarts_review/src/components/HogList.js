import React from 'react'
import HogCard from './HogCard'

function HogList (props) {
  // const hogs = props.hogs
  const { hogs } = props
  const cards = hogs.map(hog => <HogCard key={hog.name} hog={hog} />)
  return (<div> {cards} </div>)
}

export default HogList
