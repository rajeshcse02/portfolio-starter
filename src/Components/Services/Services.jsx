import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Resume.pdf";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 1, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/*left side*/}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          I will make an responsive website with good design and functionality with my skillset.
          <br />
          I am also able to develop a software and website withh all functionality.
        </span>
        <a href={Resume} download="Rajesh Resume">
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur" style={{ background: "3ABF1FF94" }}></div>
      </div>
      {/*right side*/}
      <div className="cards">
        <motion.div
          whileInView={{ left: "14rem" }}
          initial={{ left: "25rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            href="https://www.technojobs.co.uk/info/it-job-roles/what-is-a-web-designer.phtml"
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma , sketch , canva and other designing tools"}
          />
        </motion.div>
        <motion.div
          whileInView={{ left: "-4rem" }}
          initial={{ left: "-6rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            href="https://en.wikipedia.org/wiki/Web_developer"
            className="c2"
            emoji={Glasses}
            heading={"Web Developer"}
            detail={
              "HTML,CSS with Bootstrap,JavaScript with NodeJs & ReactJS Frameworks. "
            }
          />
        </motion.div>
        <motion.div
          whileInView={{ left: "12rem" }}
          initial={{ left: "23rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            href="https://en.wikipedia.org/wiki/Programmer"
            className="c3"
            emoji={Humble}
            heading={"Programmer"}
            detail={
              " C and Java with intermediate level of knowledge,Python Basics and frameworks of python"
            }
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
