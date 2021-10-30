import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.querySelector("#root"));

// For hot relaoding(automatic reloading of server)

if (module.hot) {
  module.hot.accept();
}
