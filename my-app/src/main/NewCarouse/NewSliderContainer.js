import React from "react";

const NewSliderContainer = ({ TheTranslate, children, TheWidth }) => {
  //   console.log(TheWidth);
  return (
    <div
      className="new-slider-container"
      style={{
        transform: `translate(${TheTranslate}em)`,
        width: TheWidth + "em",
      }}
    >
      {children}
    </div>
  );
};

export default NewSliderContainer;
