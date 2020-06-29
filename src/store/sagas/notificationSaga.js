import { put, takeEvery, all, call } from 'redux-saga/effects'
import { resetErrorAction, errorAction } from '../actions/actions';

export const delay = (ms) => new Promise(res => setTimeout(res, ms))


// worker Saga: will be fired on ERROR actions
// and it will raise RESET_ERROR action to clear it
// after 3000ms
export function* clearError() {
  yield call(delay, 3000)
  yield put(resetErrorAction);
}

function* clearErrorSaga() {
  yield takeEvery(errorAction.type, clearError);
}


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    clearErrorSaga(),
  ])
}