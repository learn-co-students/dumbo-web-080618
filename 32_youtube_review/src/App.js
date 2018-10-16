import React, { Component } from 'react'
import VideoList from './VideoList'
import Searchbar from './Searchbar'
import ViewerContainer from './ViewerContainer'
import keys from './keys'

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedVideo: null,
      videos: []
    }

    this.submitHandler = this.submitHandler.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
  }

  componentDidMount() {
    const searchTerm = 'cockatiels'
    this.makeSearch(searchTerm)
  }

  makeSearch(searchTerm) {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${keys.API_KEY}&q=${searchTerm}&type=video`

    fetch(url)
    .then(r => r.json())
    .then(res => this.setState({videos: res.items, selectedVideo: res.items[0]}))
  }

  submitHandler(searchTerm) {
    this.makeSearch(searchTerm)
  }

  clickHandler(videoObj) {
    this.setState({selectedVideo: videoObj})
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Searchbar submitHandler={this.submitHandler}/>
        <ViewerContainer selectedVideo={this.state.selectedVideo}/>
        <VideoList clickHandler={this.clickHandler} videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
