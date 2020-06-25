import { combineReducers } from 'redux'
import { errorMessageAction } from '../actions/actions'
import vehicleReducer from "./vehicleReducer";
import eventReducer from "./eventReducer";

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  const { type, error } = action

  if (type === errorMessageAction) {
    return null
  } else if (error) {
    return error
  }
  return state
}

const rootReducer = combineReducers({
  vehicles: vehicleReducer,
  events: eventReducer,
  errorMessage,
})

export default rootReducer