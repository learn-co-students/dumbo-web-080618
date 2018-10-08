// 1. We need to tell it to take in React and the Component function from 'react' library
// 2. We need to make a class call it TextHolder
// 3. Make a method inside of it called render
// 4. Export this class

import React, { Component } from 'react';

class TextHolder extends Component {
  render(){
    debugger;
    return (<p>Hi my name is {this.props.name} and I {this.props.action}</p>)
  }
}

export default TextHolder
