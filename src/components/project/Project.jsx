import React, { useContext } from "react";
import "./project.scss";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { ThemeContext } from "../../context";

function Project(props) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="project"
      style={{ backgroundColor: darkMode ? "#424242" : "", color: darkMode && "whitesmoke" }}
    >
      <div className="box">
        <img src={props.img} alt="" />
        <h2 style={{ color: darkMode && "#1985a1" }}>{props.title}</h2>

        <div className="buttons">
          <button className="hover">
            <a href={props.liveUrl} style={{ color: darkMode && "white" }}>
              Live Website
            </a>
            <div className="icon" style={{ color: darkMode && "#1985a1" }}>
              <OpenInNewIcon />
            </div>
          </button>
          <button className="hover">
            <a href={props.gitHub} style={{ color: darkMode && "white" }}>
              GitHub
            </a>
            <div className="icon" style={{ color: darkMode && "#1985a1" }}>
              <OpenInNewIcon />
            </div>
          </button>
        </div>

        <p>{props.description}</p>
        <div className="tech-used">
          <span>{props.techOne}</span>
          <span>{props.techTwo}</span>

          <span>{props.techThree}</span>
          <span>{props.techFour}</span>
        </div>
      </div>
    </div>
  );
}

export default Project;
