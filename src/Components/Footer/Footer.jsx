import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>rajeshcsengineer@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/rajesh2kkid/">
          <Insta color="white" size="3rem" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100011361377290">
          <Facebook color="white" size="3rem" />
          </a>
          <a href="https://github.com/rajeshcse02">
          <Github color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
