import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers } from "redux";
import vehicleReducer from "./reducers/vehicleReducer";
import eventReducer from "./reducers/eventReducer";

const composedEnhancers = composeWithDevTools();

const rootReducer = combineReducers({
  vehicles: vehicleReducer,
  events: eventReducer,
});

const store = createStore(rootReducer, composedEnhancers);

export default store;
