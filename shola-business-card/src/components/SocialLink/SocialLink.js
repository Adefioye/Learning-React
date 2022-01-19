import React from "react";
import "./SocialLink.css";

function SocialLink() {
  return (
    <div className="social-link">
      <ul className="social-list">
        <li>
          {" "}
          <a className="social-icon" href="#" aria-label="facebook">
            <i class="fab fa-facebook"></i>
          </a>{" "}
        </li>
        <li>
          {" "}
          <a className="social-icon" href="#" aria-label="instagram">
            <i class="fab fa-instagram-square"></i>
          </a>{" "}
        </li>
        <li>
          {" "}
          <a className="social-icon" href="#" aria-label="twitter">
            <i class="fab fa-twitter"></i>
          </a>{" "}
        </li>
        <li>
          {" "}
          <a className="social-icon" href="#" aria-label="github">
            <i class="fab fa-github-square"></i>
          </a>{" "}
        </li>
      </ul>
    </div>
  );
}

export default SocialLink;
