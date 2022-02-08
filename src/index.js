import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(Reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
