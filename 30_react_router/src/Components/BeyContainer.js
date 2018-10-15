import React, {Component} from 'react'
import Bey from './Bey'

class BeyContainer extends Component {
  render(){
    const BeyCards = this.props.BeyArray.map(bey => <Bey key={bey.name} singleBey={bey}/>)

    return (
      <div className="beyContainer">
        {BeyCards}
      </div>
    )
  }
}

export default BeyContainer
