import React, {Component} from 'react'

class Bey extends Component {
  render(){
    console.log("we here now", this.props.singleBey.img);
    return <img alt="" src={this.props.singleBey.img} />
  }
}

export default Bey
