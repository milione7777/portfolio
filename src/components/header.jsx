import React from "react";
import Modal from "./modal";
import "../scss/main.scss";

function Header() {
  return (
    <header className="header">
      <div className="container items-center flex justify-between">

        <h3 className="text-white name-header">Stanko A.Y</h3>

        <ul className="text-white items-center w-[300px] justify-between hidden md:flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Portfolio</a>
          </li>
        </ul>

        <a className="text-white hidden md:block" href="/">
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
