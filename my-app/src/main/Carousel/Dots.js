/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Dot = ({ active }) => (
  <div
    css={css`
      padding: 10px;
      margin-right: 1px;
      cursor: pointer;
      border-radius: 50%;
      background: ${active ? "black" : "white"};

      transform: scale(0.5);
    `}
  >
    {" "}
  </div>
);

const Dots = ({ slides, activeSlide }) => (
  <div
    css={css`
      position: absolute;
      bottom: 25px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeSlide === i} />
    ))}
  </div>
);

export default Dots;
