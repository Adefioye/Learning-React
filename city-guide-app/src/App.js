import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
// import React Router
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Details from "./components/pages/Details";
import News from "./components/pages/News";
import NotFoundPage from "./components/pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="home" />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/details" element={<Details />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
