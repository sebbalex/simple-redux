import {  put, takeEvery } from 'redux-saga/effects'
import {  resetErrorAction } from '../actions/actions';

const delay = (ms) => new Promise(res => setTimeout(res, ms))


// worker Saga: will be fired on ERROR actions
function* clearError(action) {
  yield delay(3000);
  yield put(resetErrorAction);

}

function* mySaga() {
  yield takeEvery("ERROR", clearError);
}

export default mySaga;
