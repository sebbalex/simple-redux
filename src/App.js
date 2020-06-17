import React from 'react';
import './App.css';
import Counter from "./Counter"
import { createStore } from "redux";
import { Provider } from "react-redux";
import storeC from "./store"

// Store
const store = createStore(storeC);



function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
