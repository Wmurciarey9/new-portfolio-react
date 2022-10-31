import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "./footer.scss";

function Footer() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <footer className="footer-section">
      <h1 style={{ color: darkMode && "white" }}>© 2020–2022</h1>
      <div className="social">
        <a href="https://github.com/Wmurciarey9">
          <i
            className=" social-icon fa-brands fa-github"
            style={{ color: darkMode && "white" }}
          ></i>
        </a>
        <a href="https://www.linkedin.com/in/wmurciarey">
          <i
            className=" social-icon fa-brands fa-linkedin"
            style={{ color: darkMode && "white" }}
          ></i>
        </a>
        <a href="https://wa.link/20fdj8">
          <i
            className=" social-icon fa-brands fa-whatsapp"
            style={{ color: darkMode && "white" }}
          ></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
