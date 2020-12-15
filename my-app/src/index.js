import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import ReduxThunk from "redux-thunk";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
