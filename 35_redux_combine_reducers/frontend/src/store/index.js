import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import hobbitReducer from './reducers/hobbitReducer'
import hogReducer from './reducers/hogReducer'


const rootReducer = combineReducers({
  hobbits: hobbitReducer,
  hogs: hogReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
// const store = createStore(hobbitReducer)

export default store
export * from './actions/hobbitActions'
