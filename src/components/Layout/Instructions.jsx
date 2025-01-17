import React from "react";
import "../../styles/Instructions.css";

const Instructions = ({ instructions }) => (
  <div
    className="instructions"
    dangerouslySetInnerHTML={{ __html: instructions }}
  />
);

export default Instructions;