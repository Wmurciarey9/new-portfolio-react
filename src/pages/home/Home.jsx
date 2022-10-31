import React, { useContext } from "react";
import About from "../../components/about/About";
import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Projects from "../../components/projects/Projects";
import Toggle from "../../components/toggle/Toggle";
import { ThemeContext } from "../../context";

function Home() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{ backgroundColor: darkMode ? "#303030" : "", color: darkMode && "white" }}>
      <Toggle />
      <Navbar />
      <Featured />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
