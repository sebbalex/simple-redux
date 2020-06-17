import { changeItVehicleAction, listVehicleAction, realAddEventAction } from '../actions/actions'
import { combineReducers } from 'redux'

const initValue = {
  vehicle0: {
    vehicleType: 0,
    name: "test_add",
    desc: "testdesc",
    service: "1970-01-01T19:00:00.000Z",
    totkm: "0",
    events: ["event0", "event1"]
  }
};

const updateVehicle = (state, action) => {
  const vehicleId = "vehicle0";
  const vehicle0 = state[vehicleId];
  console.log(vehicle0);

  return {
    ...state,
    [vehicleId]: {
      ...vehicle0,
      name: "changed",
    }
  };
}


const addEvent = (state, action) => {
  const { payload } = action
  const { vehicleId, eventId } = payload
  const vehicle0 = state[vehicleId];
  console.log("add event in vehicleReducer", vehicleId);
  return {
    ...state,
    [vehicleId]: {
      ...vehicle0,
      events: vehicle0.events.concat(eventId),
    }
  };
}

// Reducer
const vehicleById = (state = initValue, action) => {
  switch (action.type) {
    case listVehicleAction.type:
      return { ...state };
    case changeItVehicleAction.type:
      return updateVehicle(state, action)
      case realAddEventAction.type:
      return addEvent(state, action)
    default:
      return state;
  }
}

const allVehicles = (state = initValue, action) => ({ ...state })

const vehicleReducer = combineReducers({
  byId: vehicleById,
  allIds: allVehicles
})

export default vehicleReducer