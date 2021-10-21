import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return <div>Hi there!</div>;
// };

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { lat: null, errorMessage: "" };
  // }

  // Using alternate state initialization

  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  // Using helper function for render method, if we have multiple return statements under it,
  // Its good practice to have just one return statement under the render method
  // This is useful for adding a uniform feature across all of the return staements.
  renderMethod() {
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Err: {this.state.errorMessage}</div>;
    }
    return <Spinner message="Please accept location request!" />;
  }
  // React says we must specify render method
  render() {
    return <div className="border red">{this.renderMethod()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

// For hot relaoding(automatic reloading of server)

if (module.hot) {
  module.hot.accept();
}
