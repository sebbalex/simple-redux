import {put, takeEvery, select, all} from 'redux-saga/effects';
import {errorAction, changeItVehicleAction} from '../actions/actions';

function* isVehicleExists() {
  const vehicleId = 'vehicle0';
  const state = yield select();
  const vehicle0 = state.vehicles?.byId[vehicleId];

  if (vehicle0 === undefined) {
    yield put({...errorAction, error: "Specified vehicle doesn't exist"});
  }
}

function* isVehicleExistsSaga() {
  yield takeEvery(changeItVehicleAction.type, isVehicleExists);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([isVehicleExistsSaga()]);
}
