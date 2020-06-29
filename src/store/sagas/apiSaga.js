import {put, all, takeLatest, call} from 'redux-saga/effects';
import {pingApiAction, pingApiGetAction, errorAction} from '../actions/actions';

function fetchData(url) {
  return fetch(url).then((response) =>
    response.ok ? response.json() : Promise.reject('status not ok'),
  );
}

function* pingApi(action) {
  try {
    const response = yield call(() => fetchData('http://localhost:5000/ping'));
    yield put({...pingApiGetAction, message: response});
  } catch (error) {
    console.error(error);
    
    yield put({
      ...errorAction,
      error: 'There has been a problem with your fetch operation:' + error,
    });
  }
}

function* pingApiSaga() {
  yield takeLatest(pingApiAction.type, pingApi);
}

export default function* rootSaga() {
  yield all([pingApiSaga()]);
}
