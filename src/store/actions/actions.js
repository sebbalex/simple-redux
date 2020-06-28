/*
 * action types
 */
export const loadInitialValuesAction = { type: 'LOAD_DEFAULT' };

export const changeItVehicleAction = { type: 'CHANGEIT_VEHICLE_ACTION' };
export const listVehicleAction = { type: 'LIST_VEHICLE_ACTION' };

export const changeItEventAction = { type: 'CHANGEIT_EVENT_ACTION' };
export const listEventAction = { type: 'LIST_EVENT_ACTION' };
export const realAddEventAction = { type: 'ADD_EVENT_ACTION' };

// notifications
export const resetErrorAction = { type: 'ERROR_RESET_ACTION' };
export const errorAction = { type: 'ERROR' };

/*
 * action creators
 */
export const updateVehicleTitle = (state, key) => {
  if (key === undefined) {
    return {
      ...errorAction,
      error: 'no vehicle found',
    };
  }
  return {
    ...changeItEventAction
  };
};

export const addEventAction = (eventTitle, key) => {
  const eventId = 'event-' + makeid(5);
  if (eventTitle === '') {
    return {
      ...errorAction,
      error: 'event couldn\'t be empty',
    };
  }
  return {
    ...realAddEventAction,
    payload: {
      eventId,
      eventTitle,
      vehicleId: key,
    },
  };
};

const makeid = (length) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
