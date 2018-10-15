import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogList from './HogList'
import Filter from './Filter'
import hogsData from '../porkers_data';

class App extends Component {
  constructor() {
    super()
    this.state = {
      hogs: hogsData,
      sort: 'all'
    }
    this.selectHandler = this.selectHandler.bind(this)
  }

  selectHandler(evt) {
    let newHogs = [...this.state.hogs]
    console.log(evt.target.value);
    const sortBy = evt.target.value
    if (sortBy === 'weight') {
      newHogs.sort(sortByWeight)
    } else if (sortBy === 'name') {
      newHogs.sort((curr, next) => (curr.name < next.name ? -1 : 1))
    } else {
      newHogs = hogsData
    }

    this.setState({hogs: newHogs})

  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter selectHandler={this.selectHandler}/>
        <HogList hogs={this.state.hogs} />
      </div>
    )
  }
}

function sortByWeight(currHog, nextHog) {
  const currWeightRatio = currHog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
  const nextWeightRatio = nextHog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']

  return currWeightRatio - nextWeightRatio
}

export default App;
