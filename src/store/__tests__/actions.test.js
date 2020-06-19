import { realAddEventAction, addEventAction } from '../actions/actions';

describe('actions', () => {
  it('should create an action to add an event', () => {
    const eventTitle = 'Title1', key = 'Key1';
    const expectedAction = {
      type: realAddEventAction.type,
      payload: {
        eventTitle,
        vehicleId: key
      }
    }
    const out = addEventAction(eventTitle, key);
    // eventId is randomly generated in action creator
    // and it couldn't be tested
    expect(out.type).toEqual(expectedAction.type)
    expect(out.payload.eventTitle).toEqual(expectedAction.payload.eventTitle)
    expect(out.payload.vehicleId).toEqual(expectedAction.payload.vehicleId)
  })
})