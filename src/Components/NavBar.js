import React from "react";
import "./NavBar.css";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import RequestInviteButton from "./RequestInviteButton";

const menuButtonclick = () => {
  var n = document.getElementById("mynav");

  n.classList.toggle("mobile-nav");
};

function NavBar() {
  return (
    <div className="topnav">
      <img className="logo" src={logo} alt="Logo" />

      <nav>
        <ul className="desk-nav" id="mynav">
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <a href="Home">About</a>
          </li>
          <li>
            <a href="Home">Contact</a>
          </li>
          <li>
            <a href="Home">Blog</a>
          </li>
          <li>
            <a href="Home">Careers</a>
          </li>
        </ul>
      </nav>
      <RequestInviteButton />

      <img
        className="menuIcon"
        onClick={menuButtonclick}
        src={hamburger}
        alt="hamburger"
      />
    </div>
  );
}

export default NavBar;
