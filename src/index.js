import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.scss";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reviewReducer from "./store/reviewReducer";

const store = createStore(
  reviewReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
