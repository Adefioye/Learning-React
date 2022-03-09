import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import { routerMiddleware, ConnectedRouter } from "connected-react-router";
// import { createBrowserHistory } from "history";
// // import { routerMiddleware } from 'react-router-redux'

import App from "./components/App";
import reducers from "./reducers"
// import createRootReducer from "./reducers";

// export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const historyMiddleware = routerMiddleware(history)

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
// const store = createStore(
//   createRootReducer(history),
//   composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
// );

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.querySelector("#root")
);
