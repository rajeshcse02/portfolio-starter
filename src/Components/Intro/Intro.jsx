import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll';

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Rajesh</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development,producting the Quality work
          </span>
        </div>

        <Link spy={true} to="Contact" smooth={true}>
        <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/rajeshcse02" target="_blank">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/rajesh-r-584b55249" target="_blank">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/rajesh2kkid/" target="_blank">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" width={382} style={{left:100}}/>
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "3rem" }}
          transition={transition}
          style={{ top: "18rem", left: "1rem" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="Web" txt2="Designer" />
        </motion.div>
        {/* blur divs */}
        <div
          className="blur s-blur1"
          style={{ background: "rgb(238 210 255" }}
        ></div>
        <div
          className="blur s-blur2"
          style={{
            position: "absolute",
            background: "#C1F5FF",
            borderRadius: "50%",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-3rem",
            filter: "blur(72px)",
            zIndex: "-9",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
