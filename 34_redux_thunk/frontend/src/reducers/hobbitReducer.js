// import hobbits from '../data/hobbit_data'

const initialState = {
  hobbits: [],
  selectedHobbit: {}
}


const reducer = (state = initialState, action) => {
  console.log(state, action );

  switch (action.type) {

    case ('LOAD_HOBBITS'): {
      return {...state, hobbits: action.payload}
    }
    case ('SELECT_HOBBIT'): {
      return {...state, selectedHobbit: action.payload}
    }

    case ('EDIT_HOBBIT'): {
      // replaces old hobbit object with shiny new edited hobbit
      const newHobbits = state.hobbits.map(hob => {
        if (hob.id === action.payload.id) {
          return {...hob, ...action.payload}
        }
        return hob
      })

      return {...state, hobbits: newHobbits}
    }

    default:
      return state
  }
}

export default reducer
