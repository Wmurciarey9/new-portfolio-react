import React, { useContext } from "react";
import "./projects.scss";
import NetflixSs from "../images/netflix-ss.png";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Project from "../project/Project";
import { ThemeContext } from "../../context";

function Projects() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="projects">
      <h1 style={{ color: darkMode && "#1985a1" }}>PROJECTS</h1>
      <div
        className="main-project"
        style={{ backgroundColor: darkMode ? "#424242" : "", color: darkMode && "whitesmoke" }}
      >
        <div className="left">
          <h2 style={{ color: darkMode && "#1985a1" }}>Netflix Clone</h2>
          <div className="buttons">
            <button className="hover">
              <a
                href="https://wilsonmrey-netflix-clone.netlify.app/"
                style={{ color: darkMode && "white" }}
              >
                Live Website
              </a>
              <div className="icon" style={{ color: darkMode && "#1985a1" }}>
                <OpenInNewIcon />
              </div>
            </button>
            <button className="hover">
              <a
                href="https://github.com/Wmurciarey9/clone-netflix-react"
                style={{ color: darkMode && "white" }}
              >
                GitHub
              </a>
              <div className="icon" style={{ color: darkMode && "#1985a1" }}>
                <OpenInNewIcon />
              </div>
            </button>
          </div>

          <p>
            This is my take on making a clone for netflix. It's got a register, login, home,
            profiles and watch pages.
          </p>
          <div className="tech-used">
            <span>React</span>
            <span>Saas</span>
            <span>MongoDB</span>
            <span>Node.js</span>
          </div>
        </div>
        <div className="right">
          <img src={NetflixSs} alt="" className="full-img" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.svg.png"
            alt=""
            className="mobile-img"
          />
        </div>
      </div>

      <div className="first-row">
        <div className="left">
          <Project
            title="Booking App"
            img="https://cdn-icons-png.flaticon.com/512/5361/5361032.png"
            liveUrl=""
            gitHub=""
            description="A booking app for business time management. Set appointments and control your work time more efficienly"
            techOne="React"
            techTwo="Saas"
            techThree="MongoDB"
            techFour="Node.js"
          />
        </div>
        <div className="right">
          <Project
            title="Ecommerce "
            img="https://cdn1.iconfinder.com/data/icons/seo-9/500/SEO-24-512.png"
            liveUrl=""
            gitHub=""
            description="Fully functional react ecommerce store.Includes login, register, cart tracker, checkout process."
            techOne="React"
            techTwo="Css"
            techThree="MongoDB"
            techFour="Node.js"
          />
        </div>
      </div>

      <div className="second-row">
        <div className="left">
          <Project
            title="Connectify"
            img="https://cdn-icons-png.flaticon.com/512/81/81149.png"
            liveUrl=""
            gitHub=""
            description="This is a project inspired from the Meetup App in the US. In my country there is nothing similar to that, so I am building one that has similar feautures and own unique UI display"
            techOne="React"
            techTwo="Saas"
            techThree="MongoDB"
            techFour="Node.js"
          />
        </div>

        <div className="right">
          <Project
            title="Bet Tracker"
            img="https://cdn0.iconfinder.com/data/icons/illustricon-tech-iv/512/data-512.png"
            liveUrl=""
            gitHub=""
            description="A live bet tracker. It tracks live sports with API to see if the selected score / result has been achieved. "
            techOne="React"
            techTwo="Saas"
            techThree="MongoDB"
            techFour="Node.js"
          />
        </div>
      </div>
      <div className="third-row">
        <div className="left">
          <Project
            title="Real Estate Site"
            img="https://cdn1.iconfinder.com/data/icons/essentials-vol-3-metaphoricon-black-and-white/256/store-shop-storefront-convenience_store-512.png"
            liveUrl=""
            gitHub=""
            description="A website dedicated to showcase high-value properties for sale. Able to set location and easily get a contact number."
            techOne="React"
            techTwo="Saas"
            techThree="MongoDB"
            techFour="Node.js"
          />
        </div>
        <div className="right">
          <Project
            title="Dashboard"
            img="https://cdn2.iconfinder.com/data/icons/team-and-office/160/Dashboard-512.png"
            liveUrl=""
            gitHub=""
            description="All functionality you need when opening a new tab in one place. Time, bookmarked sites, motivational phrase to keep you going and so much more."
            techOne="React"
            techTwo="Saas"
            techThree="MongoDB"
            techFour="Node.js"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
