import React from "react";
import "./Card.css";

const Card = ({ href, emoji, heading, detail }) => {
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a href={href}>
        <button className="c-button">LEARN MORE</button>
      </a>
    </div>
  );
};

export default Card;
