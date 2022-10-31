import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "./about.scss";

function About() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="about">
      <div className="box-fade" id="projects">
        <div className="left">
          <h1 style={{ color: darkMode && "#1985a1" }}>I MAKE IT REAL</h1>
          <h2>Dreams made reality</h2>
        </div>
        <div className="right">
          <h2>My journey so far</h2>
          <p>
            I love what I do, creating projects from scratch for businesses. Personal projects for
            diverse markets and future apps to post live on app-stores.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
