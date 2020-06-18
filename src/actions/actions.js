/*
 * action types
 */
export const changeItVehicleAction = { type: "CHANGEIT_VEHICLE_ACTION" };
export const listVehicleAction = { type: "LIST_VEHICLE_ACTION" };

export const changeItEventAction = { type: "CHANGEIT_EVENT_ACTION" };
export const listEventAction = { type: "LIST_EVENT_ACTION" };
export const realAddEventAction = { type: "ADD_EVENT_ACTION" };

/*
 * action creators
 */
export const addEventAction = (eventTitle, key) => {
  const eventId = "event-" + makeid(5);
  return {
    type: "ADD_EVENT_ACTION",
    payload: {
      eventId,
      eventTitle,
      vehicleId: key,
    },
  };
};

const makeid = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
