import "./navbar.scss";
import Avatar from "../images/me.jpg";

import React, { useState } from "react";
import Toggle from "../toggle/Toggle";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container" id="skills">
        <div className="left">
          <img src={Avatar} alt="" />
        </div>
        <div className="right">
          <a href="/" className="mainLink">
            Home
          </a>
          <a href="#projects">Projects</a>
          <a href="/">Skills</a>
          <a href="/contact" className="mainLink">
            Contact
          </a>
          <Toggle />
          {/* <ModeNightIcon className="icon" /> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;