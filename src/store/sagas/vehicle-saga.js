import { put, takeEvery, select, all } from 'redux-saga/effects'
import { resetErrorAction } from '../actions/actions';

const delay = (ms) => new Promise(res => setTimeout(res, ms))


// worker Saga: will be fired on ERROR actions
// and it will raise RESET_ERROR action to clear it
// after 3000ms
function* clearError(action) {
  yield delay(3000);
  yield put(resetErrorAction);
}

function* mySaga() {
  yield takeEvery("ERROR", clearError);
}

function* isVehicleExists(action) {
  const vehicleId = "vehicle0";
  const state = yield select();
  const vehicle0 = state.vehicles?.byId[vehicleId];
  if (vehicle0 === undefined) {
    yield put({ type: 'ERROR', error: "Specified vehicle doesn't exist" });
  }
}

function* isVehicleExistsSaga() {
  yield takeEvery("CHANGEIT_VEHICLE_ACTION", isVehicleExists);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    mySaga(),
    isVehicleExistsSaga()
  ])
}