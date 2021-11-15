import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eveniet vero
      ducimus velit ipsa molestiae, nostrum sit hic veniam nemo nobis
      recusandae! Nam iure quidem fugiat ratione, deleniti perspiciatis
      explicabo!
      <br />
      <Footer />
    </div>
  );
}

export default App;
