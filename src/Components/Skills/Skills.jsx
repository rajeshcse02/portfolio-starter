import React from "react";
import "./Skills.css";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Skills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="Skills">
      <div className="heading">
        <span>Skills</span>
      </div>
      <div className="skills">
        <div className="skillset">
          <div
            style={{
              color: darkMode ? "white" : "",
              background: darkMode ? "#1f1f1f" : "",
              border: darkMode ? "1px solid white" : "",
            }}
            className="circle"
          >
            "C"&Java
          </div>
          <span>language</span>
          <span>InterMediate</span>
        </div>
        <div className="skillset">
          <div
            style={{
              color: darkMode ? "white" : "",
              background: darkMode ? "#1f1f1f" : "",
              border: darkMode ? "1px solid white" : "",
            }}
            className="circle"
          >
            HTML & CSS
          </div>
          <span>with Bootstrap</span>
          <span>Advanced</span>
        </div>
        <div className="skillset">
          <div
            style={{
              color: darkMode ? "white" : "",
              background: darkMode ? "#1f1f1f" : "",
              border: darkMode ? "1px solid white" : "",
            }}
            className="circle"
          >
            OOPS
          </div>
          <span>using Java</span>
          <span>Intermediate</span>
        </div>
        <div className="skillset">
          <div
            style={{
              color: darkMode ? "white" : "",
              background: darkMode ? "#1f1f1f" : "",
              border: darkMode ? "1px solid white" : "",
            }}
            className="circle"
          >
            DataBase
          </div>
          <span>with SQL,Neo4j</span>
          <span>Intermediate</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
