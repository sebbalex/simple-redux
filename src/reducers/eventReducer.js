import { changeItEventAction, listEventAction } from '../actions/actions'
import { combineReducers } from 'redux'

const initValue = {
  event0: {
    time: "3000",
    title: "Cambio pastiglie",
    description:
      "The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ",
    lineColor: "#009688",
    //icon: require("../assets/images/mtb.jpg"),
    imageUrl:
      "https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg"
  },
  event1: {
    time: "2500",
    title: "Cambio gomma posteriore",
    description:
      "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.",
    //icon: require("../assets/images/mtb.jpg"),
    imageUrl:
      "https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg"
  },
  allIds: ["event0", "event1"]
};

const updateEvent = (state, action) => {
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
const eventById = (state = initValue, action) => {
  switch (action.type) {
    case listEventAction.type:
      return { ...state };
    case changeItEventAction.type:
      return updateEvent(state, action)
    default:
      return state;
  }
}

const allEvents = (state = initValue, action) => {
  return { ...state };
}

const eventReducer = combineReducers({
  byId: eventById,
  allIds: allEvents
})

export default eventReducer