import React from "react";
import Modal from "./modal";
import "../scss/main.scss";

function Header() {
  return (
    <header className="header">
      <div className="container items-center flex justify-between">
        <h3 className="text-white name-header">Stanko A.Y</h3>
        <nav className="nav">
          <ul className="text-white items-center w-[300px] justify-between hidden md:flex">
            <li>
              <a className="btn-nav" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="btn-nav" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="btn-nav" href="/">
                Portfolio
              </a>
            </li>
          </ul>
        </nav>

        <a className="text-white hidden md:block btn-border" href="/">
          Let’s talk
        </a>

        <div className="burger">
          <span></span>
        </div>
      </div>
      {/* <Modal /> */}
    </header>
  );
}

export default Header;
