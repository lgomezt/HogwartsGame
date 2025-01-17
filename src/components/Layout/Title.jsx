import React from "react";
import "../../styles/Title.css";

const Title = ({ logo }) => (
  <div className="title">
    <img src={logo} alt="Hogwarts Logo" />
    <h1>The Hogwarts Game</h1>
  </div>
);

export default Title;