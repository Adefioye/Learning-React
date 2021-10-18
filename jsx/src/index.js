// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a function component
const App = () => {
  const buttonText = "Click Me!";
  return (
    <div>
      <label class="label" for="name">
        Enter name:
      </label>
      <input id="className" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};

// Display the component on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

// For hot relaoding(automatic reloading of server)

if (module.hot) {
  module.hot.accept();
}
