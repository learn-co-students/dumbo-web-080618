
export const updateHobbit = (hobbit) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/hobbits/${hobbit.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(hobbit)
  })
  .then(r => r.json())
  .then(updatedHobbit => dispatch({type: 'EDIT_HOBBIT', payload: hobbit}))
}
}

export const loadHobbits = () => {
  return (dispatch) => {
    return fetch('http://localhost:3000/hobbits/')
    .then(r => r.json())
    .then(allHobbits => dispatch({type: 'LOAD_HOBBITS', payload: allHobbits}))
  }
}
