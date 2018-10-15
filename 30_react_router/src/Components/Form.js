import React, {Component} from 'react'

class Form extends Component{
  //create state as a way for form to retain the name and img that the user types
  state = {
    name: "",
    img: ""
  }


  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

//Created submitHandler method to make it easier to pass this.state as an argument to the handleSubmit callback function that was given to this component as a prop from it's parent container (App.js)
  submitHandler = (event) => {
//Prevent default to prevent page from automatically reloading after form submission
    event.preventDefault()
//invoke callback function handleSubmit which was passed to this component as a prop from it's parent container
//then pass the current state as an argument to the handleSubmit callback function so that the parent container now has the information it needs to update its state
    this.props.handleSubmit(this.state)
//set state for form component so that the input values go back to an empty string. This allows the input fields to clear once the user submits the form
    this.setState({
      name: "",
      img: ""
    })
  }


  render(){
    return (
      <form onSubmit={this.submitHandler}>
        <input
        type="text"
  //set value equal to current state so that the form can display the correct value in the input
        value= {this.state.name}
        name="name"
  //add onChange event listener that allows us to set state every time the user types a character
        onChange={this.changeHandler}
        />
        <input
        type="text"
  //set value equal to current state so that the form can display the correct value in the input
        value= {this.state.img}
        name="img"
  //add onChange event listener that allows us to set state every time the user types a character
        onChange={this.changeHandler}
        />
  {/*You must simply lay the slay*/}
        <button>Lay The Slay</button>
      </form>
    )
  }
}

export default Form
