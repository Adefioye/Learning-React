import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
// import { connectRouter } from "connected-react-router";

import authReducer from "./authReducer";
import streamsReducer from "./streamsReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamsReducer,
});

// const createRootReducer = (history) =>
//   combineReducers({
//     router: connectRouter(history),
//     auth: authReducer,
//     form: formReducer,
//     streams: streamsReducer,
//   });

// export default createRootReducer;
