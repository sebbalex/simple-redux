import {vehicleById, initValue} from '../reducers/vehicleReducer';
import {loadInitialValuesAction, realAddEventAction} from '../actions/actions';

describe('vehicles reducer', () => {
  it('should return the initial state', () => {
    expect(vehicleById(undefined, {})).toEqual({});
  });

  it('should return the default values', () => {
    expect(vehicleById(undefined, loadInitialValuesAction)).toEqual(initValue);
  });
});

describe('events reducer', () => {
  it('should fails to add an event to a not exist vehicle', () => {
    const eventId = 'event-TEST01',
      eventTitle = 'eventTitleTest',
      vehicleId = 'vehichleTest01';
    expect(
      vehicleById(undefined, {
        type: realAddEventAction.type,
        payload: {
          eventId,
          eventTitle,
          vehicleId,
        },
      }),
    ).toEqual({});
  });
});
