/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Slide = ({ content }) => {
  const SlideCSS = css`
    height: 100%;
    width: 100%;
    background-image: url("${content}");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
  `;
  return <div css={SlideCSS}></div>;
};

export default Slide;
