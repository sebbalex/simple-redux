import {put, takeEvery, select, all} from 'redux-saga/effects';
import {errorAction, changeItEventAction} from '../actions/actions';

function* isEventExists() {
  const eventId = 'event1';
  const state = yield select();
  const event1 = state.events?.byId[eventId];

  if (event1 === undefined) {
    yield put({...errorAction, error: "Specified event doesn't exist"});
  }
}

function* isEventExistsSaga() {
  yield takeEvery(changeItEventAction.type, isEventExists);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([isEventExistsSaga()]);
}
