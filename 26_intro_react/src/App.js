
// 1. Here we need to tell our app that we're using these libraries or pieces of code
import React, { Component } from 'react';

import TextHolder from './TextHolder'


// 2. Extending our class to be from Component
class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <TextHolder name={"Prince"} action={"play sports"} />
        <TextHolder name={"Juan"} action={"sit"} />
        <TextHolder name={"Niky"} action={"code"} />
        <TextHolder name={"Tashawn"} action={"ball out"} />
      </div>
    );
  }
}

export default App;
