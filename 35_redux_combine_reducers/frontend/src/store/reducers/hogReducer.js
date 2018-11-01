import hogs from '../../data/porkers_data'


export default function reducer (state = hogs, action) {
  switch(action.type) {
    case ('LOAD_HOBBITS'):
      console.log('in hogs reducer with load hobbit action')

    default:
      return state
  }
}
