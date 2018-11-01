/*-----------ACTION CREATORS-------------*/
export const selectHobbit = (hobbit) => {
  return {type: 'SELECT_HOBBIT', payload: hobbit }
}

const editHobbit = (hobbit) => ({type: 'EDIT_HOBBIT', payload: hobbit})




/*-----------THUNK CREATORS-------------*/

export const updateHobbit = (hobbit) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/hobbits/${hobbit.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(hobbit)
    })
      .then(r => r.json())
      .then(updatedHobbit => dispatch(editHobbit(updatedHobbit)))
  }
}

export const loadHobbits = () => {
  return (dispatch) => {
    return fetch('http://localhost:3000/hobbits/')
      .then(r => r.json())
      .then(allHobbits => dispatch({type: 'LOAD_HOBBITS', payload: allHobbits}))
  }
}
