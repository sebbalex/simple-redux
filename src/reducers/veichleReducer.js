import { changeItAction, listAction } from '../actions/actions'
import { combineReducers } from 'redux'

const initValue = {
  "veichle0": {
    veichleType: 0,
    name: "test_add",
    desc: "testdesc",
    service: "1970-01-01T19:00:00.000Z",
    totkm: "0",
    events: ["event0", "event1"]
  },
  allIds: ["veichle0"]
};

const updateVeichle = (state, action) => {
  const veichleId = "veichle0";
  const veichle0 = state[veichleId];
  console.log(veichle0);

  return {
    ...state,
    [veichleId]: {
      ...veichle0,
      name: "changed",
    }
  };
}

// Reducer
const veichleById = (state = initValue, action) => {
  switch (action.type) {
    case listAction.type:
      return { ...state };
    case changeItAction.type:
      return updateVeichle(state, action)
    default:
      return state;
  }
}

const allVeichles = (state = initValue, action) => {
  return { ...state };
}

const veichleReducer = combineReducers({
  byId: veichleById,
  allIds: allVeichles
})

export default veichleReducer