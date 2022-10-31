import { useContext } from "react";
import "./toggle.scss";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="t">
      <DarkModeIcon className="t-icon" />
      <LightModeIcon className="t-icon" />

      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 30 : 0 }}
      ></div>
    </div>
  );
};

export default Toggle;
