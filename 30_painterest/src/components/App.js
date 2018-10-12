import React, { Component } from 'react';

import Navbar from './Navbar.js'
import PaintingList from './PaintingList'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <PaintingList />
      </div>
    );
  }
}

export default App;
