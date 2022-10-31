import React, { useContext } from "react";
import ReactTooltip from "react-tooltip";
import "./featured.scss";
import BigMe from "../images/BigMe.jpg";
import { ThemeContext } from "../../context";

function Featured() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="featured">
      <div
        className="desc"
        style={{ backgroundColor: darkMode ? "#424242" : "", color: darkMode && "whitesmoke" }}
      >
        <div className="left">
          <h1 style={{ color: darkMode && "#1985a1" }}>Hi, I'm Wilson</h1>
          <h2>SOFTWARE DEVELOPER</h2>
          <p>Passionate, creative full stack developer freelancer </p>
          <img src={BigMe} alt="" />
        </div>
        <div className="right">
          <div className="skill-section">
            <div className="skill-item">
              <ReactTooltip offset={{ right: 80 }} />
              <i data-tip="HTML" className="color-hover fa-brands fa-html5"></i>
            </div>
            <div className="skill-item">
              <ReactTooltip offset={{ right: 80 }} />
              <i data-tip="CSS" className="color-hover fa-brands fa-css3"></i>
            </div>
            <div className="skill-item">
              <ReactTooltip offset={{ right: 80 }} />
              <i data-tip="JAVASCRIPT" className="color-hover  fa-brands fa-js"></i>
            </div>
            <div className="skill-item">
              <ReactTooltip offset={{ right: 80 }} />
              <i data-tip="NODE.JS" className="color-hover  fa-brands fa-node-js"></i>
            </div>
            <div className="skill-item">
              <ReactTooltip offset={{ right: 80 }} />
              <i data-tip="REACT" className="color-hover  fa-brands fa-react"></i>
            </div>
            <div className="skill-item">
              <ReactTooltip offset={{ right: 80 }} />
              <i data-tip="GIT" className="color-hover  fa-brands fa-git-alt"></i>
            </div>
            <div className="skill-item">
              <ReactTooltip offset={{ right: 80 }} />
              <i data-tip="GITHUB" className="color-hover  fa-brands fa-github"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
