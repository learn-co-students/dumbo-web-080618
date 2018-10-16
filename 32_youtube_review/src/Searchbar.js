/*eslint-disable no-undef*/
import React, { Component } from 'react'

class Searchbar extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
  }

  onChange = (evt) => {
    this.setState({ searchTerm: evt.target.value })
  }


  submit = (evt) => {
    evt.preventDefault()
    this.props.submitHandler(this.state.searchTerm)
  }

  render() {
    return(
      <form onSubmit={this.submit}>
        <input onChange={this.onChange} type="text" name="searchTerm" value={this.state.searchTerm} />
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default Searchbar
