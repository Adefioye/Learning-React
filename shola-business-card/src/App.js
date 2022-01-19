import About from "./components/About/About";
import Info from "./components/Info/Info";
import Interest from "./components/Interest/Interest";
import SocialLink from "./components/SocialLink/SocialLink";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="profile-info">
          <Info />
        </div>
        <div className="profile-main">
          <About />
          <Interest />
          <SocialLink />
        </div>
      </div>
    </div>
  );
}

export default App;
