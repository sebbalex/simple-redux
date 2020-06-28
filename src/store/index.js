import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./reducers";
import vehicleSaga from './sagas/vehicleSaga';
import notificationSaga from './sagas/notificationSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(vehicleSaga);
sagaMiddleware.run(notificationSaga);

export default store;
