import React from "react";
import styled from "styled-components";
import "../../App.css";

function Footer() {
  return (
    <FooterContainer className="mainFooter">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* column 1 */}
            <div className="col-md-3 col-sm-6">
              <h4>lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
              </ul>
            </div>
            {/* column 2 */}
            <div className="col-md-3 col-sm-6">
              <h4>lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  {" "}
                  <a href=""> lorem ipsum</a>
                </li>
                <li>
                  <a href="">lorem ipsum</a>
                </li>
                <li>
                  <a href="">lorem ipsum</a>
                </li>
                <li>
                  <a href="">lorem ipsum</a>
                </li>
              </ul>
            </div>
            {/* column 3 */}
            <div className="col-md-3 col-sm-6">
              <h4>lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="">lorem ipsum</a>
                </li>
                <li>
                  <a href="">lorem ipsum</a>
                </li>
                <li>
                  <a href="">lorem ipsum</a>
                </li>
                <li>
                  <a href="">lorem ipsum</a>
                </li>
              </ul>
            </div>
            {/* column 4 */}
            <div className="col-md-3 col-sm-6">
              <h4>lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="">lorem ipsum</a>
                </li>
                <li>
                  <a href="">lorem ipsum</a>
                </li>
                <li>
                  <a href="">lorem ipsum</a>
                </li>
                <li>
                  <a href="">lorem ipsum</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="text-xs-center">
              &copy;{new Date().getFullYear()} City Guide App - All Rights
              Reserved
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background-color: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding: 3rem 0;
  }

  ul li a {
    color: var(--mainGrey);
    text-decoration: none;
  }

  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;
