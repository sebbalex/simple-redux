import { put, takeEvery, select, all } from 'redux-saga/effects'


function* isVehicleExists() {
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
    isVehicleExistsSaga()
  ])
}