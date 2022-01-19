import React from "react";
import profilePic from "./../../images/profile-pic.png";
import "./Info.css";

function Info() {
  return (
    <div className="info">
      <img src={profilePic} alt="" className="info-pic" />
      <h1 className="info-name">Adeshola Adeniji</h1>
      <p className="info-title">Humanitarian Aid Worker</p>
      <div className="info-link">
        <button>
          <i class="fas fa-envelope"></i> Email
        </button>
        <button>
          <i class="fab fa-linkedin"></i> LinkedIn
        </button>
      </div>
    </div>
  );
}

export default Info;
