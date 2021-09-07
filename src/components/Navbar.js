import React from "react";
import logo from "../assets/stable-logo.svg";
import "../style/Navbar.css";

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
    </div>
  );
}

export default Navbar;
