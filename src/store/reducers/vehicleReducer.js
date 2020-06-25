import {
  changeItVehicleAction,
  listVehicleAction,
  realAddEventAction,
  loadInitialValuesAction,
} from "../actions/actions";
import { combineReducers } from "redux";

export const initValue = {
  vehicle0: {
    vehicleType: 0,
    name: "test_add",
    desc: "testdesc",
    service: "1970-01-01T19:00:00.000Z",
    totkm: "0",
    events: ["event0", "event1"],
  },
  vehicle1: {
    vehicleType: 0,
    name: "test_add",
    desc: "testdesc",
    service: "1970-01-01T19:00:00.000Z",
    totkm: "0",
    events: [],
  },
};

const updateVehicle = (state, action) => {
  const vehicleId = "vehicle0";
  const vehicle0 = state[vehicleId];
  if(vehicle0 === undefined) {
    return state;
  }
  return {
    ...state,
    [vehicleId]: {
      ...vehicle0,
      name: "changed",
    },
  };
};

const addEvent = (state, action) => {
  const { payload } = action;
  const { vehicleId, eventId } = payload;
  const vehicle0 = state[vehicleId];
  if(vehicle0 === undefined) {
    return state;
  }
  return {
    ...state,
    [vehicleId]: {
      ...vehicle0,
      events: vehicle0.events.concat(eventId),
    },
  };
};

// Reducer
export const vehicleById = (state = {}, action) => {
  switch (action.type) {
    case loadInitialValuesAction.type:
      return initValue;
    case listVehicleAction.type:
      return { ...state };
    case changeItVehicleAction.type:
      return updateVehicle(state, action);
    case realAddEventAction.type:
      return addEvent(state, action);
    default:
      return state;
  }
};

const allVehicles = (state = [], action) => {
  switch (action.type) {
    case loadInitialValuesAction.type:
      return Object.keys(initValue);
    case realAddEventAction.type:
      return [...state, action.payload.eventId]
    default:
      return state;
  }
}

const vehicleReducer = combineReducers({
  byId: vehicleById,
  allIds: allVehicles,
});

export default vehicleReducer;