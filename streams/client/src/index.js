import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";


import App from "./components/App";
import reducers from "./reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.querySelector("#root")
);














// import { routerMiddleware, ConnectedRouter } from "connected-react-router";
// import { createBrowserHistory } from "history";
// // import { routerMiddleware } from 'react-router-redux'

// import createRootReducer from "./reducers";
// export const history = createBrowserHistory();

// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
// const store = createStore(
//   createRootReducer(history),
//   composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
// );
