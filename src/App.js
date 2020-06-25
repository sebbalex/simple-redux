import React from "react";
import "./App.css";
import Vehicles from "./Vehicles";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Vehicles />
    </Provider>
  );
}

export default App;
