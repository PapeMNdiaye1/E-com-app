import React from "react";
import leftArrow from "../img/left-arrow.svg";
import rightArrow from "../img/right-arrow.svg";

const Arrows = ({ handleClick, Position }) => {
  return (
    <div
      style={Position === "left" ? { left: "1em" } : { right: "1em" }}
      className="arrows"
      onClick={handleClick}
    >
      {Position === "right" ? (
        <img src={rightArrow} />
      ) : (
        <img src={leftArrow} />
      )}
    </div>
  );
};

export default Arrows;
