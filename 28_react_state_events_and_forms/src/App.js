import React, { Component } from 'react';
import './App.css';
import BeyContainer from './Components/BeyContainer';
import Form from './Components/Form';

class App extends Component {
  state = {
    BeyArray: [
      {name: "slay 1", img: "https://i.pinimg.com/originals/e7/d8/a8/e7d8a85206a45cd2b852a526c00c7956.jpg"},
      {name: "slay 2", img: "http://thatgrapejuice.net/wp-content/uploads/2016/02/beyonce-that-grape-juice-formation-600x375.png"}
    ]
  }

  handleSubmit = (newBey) => {
//Use spread operator to make a copy of current state and then add newBey object to the copied array
    const newBeyArray = [...this.state.BeyArray, newBey]
//set state equal to the copied array
    this.setState({
      BeyArray: newBeyArray
    })
  }

  render() {
    return (
      <div>
        <Form handleSubmit={this.handleSubmit}/><br/>
        <BeyContainer BeyArray={this.state.BeyArray}/>
      </div>
    );
  }
}

export default App;
