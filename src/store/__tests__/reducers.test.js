import {vehicleById, initValue} from '../reducers/vehicleReducer';
import { loadInitialValuesAction } from '../actions/actions';

describe('vehicles reducer', () => {
  it('should return the initial state', () => {
    expect(vehicleById(undefined, {})).toEqual({})
  });
  
  it('should return the default values', () => {
    expect(vehicleById(undefined, loadInitialValuesAction)).toEqual(initValue)
  });

});