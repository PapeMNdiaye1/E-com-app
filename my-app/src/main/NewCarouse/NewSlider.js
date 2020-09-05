import React from "react";
import NewSliderContainer from "./NewSliderContainer";
import Arrows from "./Arrows";
import NewSlide from "./NewSlide";
import { useState } from "react";
import { memo } from "react";

const NewSlider = ({ slides }) => {
  const TheWidth = 50;

  const [state, setState] = useState({ Translate: 0 });

  const slideToLeft = () => {
    if (state.Translate !== 0) {
      setState({ Translate: state.Translate + TheWidth });
    }
  };

  const slideToRight = () => {
    if (state.Translate !== -(TheWidth * slides.length - TheWidth)) {
      setState({ Translate: state.Translate - TheWidth });
    }
  };

  return (
    <div className="new-slider" style={{ width: TheWidth + "em" }}>
      <NewSliderContainer
        TheTranslate={state.Translate}
        TheWidth={TheWidth * slides.length}
      >
        {slides.map((slide, i) => (
          <NewSlide key={i} TheWidth={TheWidth} Image={slide} />
        ))}
      </NewSliderContainer>
      <Arrows Position={"left"} handleClick={slideToLeft}></Arrows>
      <Arrows Position={"right"} handleClick={slideToRight}></Arrows>
    </div>
  );
};

export default memo(NewSlider);
