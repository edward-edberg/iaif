import React from "react";
import logo from "./img/01.png";

function Header() {
  return (
    <header className="header">
      <a href="#">
        <img src={logo} alt="IAIF logo" className="nav-logo" />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#">
              About
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Mission
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
