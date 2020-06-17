import React from 'react';
import './App.css';
import Counter from "./Veichles"

import { Provider } from "react-redux";
import store from "./store"


function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
