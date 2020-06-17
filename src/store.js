const initValue = {
  veichles: {
    byId: {
      "veichle0": {
        veichleType: 0,
        name: "test_add",
        desc: "testdesc",
        service: "1970-01-01T19:00:00.000Z",
        totkm: "0",
        events: ["event0", "event1"]
      }
    },
    allIds: ["veichle0"]
  },
  events: {
    byId: {
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
      }
    },
    allIds: ["event0", "event1"]
  }
};

// Reducer
const counter = (state = initValue, action) => {
  switch (action.type) {
    case "list":
      return { ...state };
    case "changeit":
      const veichleId = "veichle0";
      const veichle0 = state[veichleId];
      return {
        ...state,
        [veichleId]: {
          ...veichle0,
          name: "changed"
        }
      };
    default:
      return state;
  }
}

export default counter