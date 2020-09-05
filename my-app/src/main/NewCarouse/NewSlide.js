import React from "react";

const NewSlide = ({ TheWidth, Image }) => {
  return (
    <div
      className="new-slide"
      style={{ width: TheWidth + "em", backgroundImage: `url(${Image})` }}
    ></div>
  );
};
export default NewSlide;
