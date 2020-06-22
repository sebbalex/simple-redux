import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import rootReducer from "./reducers";

const composedEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composedEnhancers);

export default store;
