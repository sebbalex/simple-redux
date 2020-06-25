import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./reducers";
import mySaga from './sagas/vehicle-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(mySaga);

export default store;
