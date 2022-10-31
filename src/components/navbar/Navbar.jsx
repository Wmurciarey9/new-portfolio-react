import "./navbar.scss";
import Avatar from "../images/me.jpg";

import React, { useState } from "react";
import Toggle from "../toggle/Toggle";
import { Link } from "react-router-dom";

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
          <Link to={`/`}>
            <span className="mainLink">Home</span>
          </Link>

          {/* <span>Projects</span>
          <span>Skills</span> */}
          <Link to={`/contact`}>
            <span className="mainLink">Contact</span>
          </Link>
          <Toggle />
          {/* <ModeNightIcon className="icon" /> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
