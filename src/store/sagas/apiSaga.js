import {put, all, takeLatest, call} from 'redux-saga/effects';
import {pingApiAction, pingApiGetAction, errorAction} from '../actions/actions';

async function fetchData(url) {
  const response = await fetch(url);
  return await (
    response.ok ? response.json() : Promise.reject('status not ok'));
}

function* pingApi() {
  try {
    const response = yield call(() => fetchData('http://localhost:5000/ping'));
    yield put({...pingApiGetAction, message: response});
  } catch (error) {
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
