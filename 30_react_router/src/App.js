import React, { Component } from 'react';
import './App.css';
import BeyContainer from './Components/BeyContainer';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import TestComponent from './Components/TestComponent';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    BeyArray: [
      {id: "1", name: "Oh you Slaying Slaying", img: "https://i.pinimg.com/originals/e7/d8/a8/e7d8a85206a45cd2b852a526c00c7956.jpg", info: "Bey is Queen and Queen is Bey. When you see Bey, know she slay"},
      {id: "2", name: "Long hurr Still Slay", img: "http://thatgrapejuice.net/wp-content/uploads/2016/02/beyonce-that-grape-juice-formation-600x375.png", info: "Bey is Queen and Queen is Bey. When you see Bey, know she slay"},
      {id: "3", name: "Bow Slay", img: "https://media.giphy.com/media/XgQsDbIP57OFi/giphy.gif", info: "Bey is Queen and Queen is Bey. When you see Bey, know she slay"},
      {id: "4", name: "Hallway Slay", img: "http://www2.pictures.zimbio.com/mp/tmznQTK28_Hx.gif", info: "Bey is Queen and Queen is Bey. When you see Bey, know she slay"},
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
        <Navbar />
        <h1>The Queen is Bey</h1>
        <Switch>
          {/*<Form handleSubmit={this.handleSubmit}/><br/>*/}
          //If url equals "/bey/new" app will see "/bey" first. This is why we want the most specific route listed first so the app sees "/bey/new" as the first condition
          <Route path="/bey/new" component={TestComponent} />
          <Route path="/bey/:id" component={TestComponent} />
          <Route exact path="/bey" render={() => {
            return <BeyContainer BeyArray={this.state.BeyArray}/>
          }} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
