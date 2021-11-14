import React from "react";
import "./topbar.scss";
import { Person, Email } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen, openMenu }) {
  return (
    <div className={`topbar ${openMenu}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Shola..
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+2349136745490</span>
          </div>
          <div className="itemContainer">
            <Email className="icon" />
            <span>kevlararamid@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div onClick={() => setMenuOpen(!menuOpen)} className="hamburger">
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
