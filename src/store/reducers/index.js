import {combineReducers} from 'redux';
import {resetErrorAction} from '../actions/actions';
import vehicleReducer from './vehicleReducer';
import eventReducer from './eventReducer';
import apiReducer from './apiReducer';

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  const {type, error} = action;
  if (type === resetErrorAction.type) {
    return null;
  } else if (error) {
    return error;
  }
  return state;
};

const rootReducer = combineReducers({
  vehicles: vehicleReducer,
  events: eventReducer,
  apis: apiReducer,
  errorMessage,
});

export default rootReducer;
