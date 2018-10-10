import React from 'react';

class Navbar extends React.Component {

  constructor(){
    super()

    // Initial state
    this.state = {
      color: 'green'
    }

    // this is one one way of binding this
    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    // console.log('Wow this is a great button')
    const colors = [
      'red',
      'magenta',
      'pink',
      'blue',
      'firebrick',
      'goldenrod'
    ]

    // Made it random every time
    // Math.random() - gives us a decimal from 0 - 1
    // Multiply it by the length and you move the range to be that wide
    // Then use the floor of the result because you want it to be a whole number
    const selectedColor = colors[Math.floor(Math.random() * colors.length)]
    console.log('inside of our handler', selectedColor)
    this.setState({
      color: selectedColor
    })
  }

  render() {
    console.log('inside of render', this)
    return (<div>
      <h2 style={{backgroundColor: this.state.color }}>Wow this is a great Navbar</h2>
      <button onClick={() => { this.handleClick() } }>Click me</button>
    </div>)
  }
}

export default Navbar;
