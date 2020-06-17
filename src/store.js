import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers } from "redux";
import veichleReducer from './reducers/veichleReducer'
import eventReducer from './reducers/eventReducer'

const composedEnhancers = composeWithDevTools()

const rootReducer = combineReducers({
  veichles: veichleReducer,
  events: eventReducer
})

const store = createStore(rootReducer, composedEnhancers)

export default store