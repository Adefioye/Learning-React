import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

export default function Intro() {
  const ref = useRef();
  useEffect(() => {
    init(ref.current, {
      showCursor: true,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="./assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Adeniji Adeshola</h1>
          <h3>
            Freelancer <span ref={ref}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="./assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
