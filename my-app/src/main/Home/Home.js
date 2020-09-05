import React from "react";
import Header from "./Header";
import Slider from "../Carousel/Slider";
import NewSlider from "../NewCarouse/NewSlider";
import images1 from "../img/D_Homepage_0900_Multi-v2.gif";
import images2 from "../img/4d8af896696a71f0c867c7376304994b.jpg";
import images3 from "../img/c6a58be3a278d0d5697736ac0175e609.jpg";
import images4 from "../img/27f01367c98be2cef6813474216af2d0.jpg";
import images5 from "../img/82e07f1cdf73c7bcf90ad63882614141.jpg";

const images = [
  `${images1}`,
  `${images1}`,
  `${images1}`,
  `${images1}`,
  `${images1}`,
];

const myImage = [
  [`${images3}`, `${images3}`, `${images3}`],
  [`${images3}`, `${images3}`, `${images3}`],
  [`${images3}`, `${images3}`],
];

export default function Home() {
  return (
    <div className="Home">
      <Header></Header>
      <div className="the-home-slider-container">
        <Slider slides={images} autoPlay={false}></Slider>
      </div>
      <div className="shop-new">
        <div className="new-items"></div>
        <div className="new-items"></div>
        <div className="new-items"></div>
      </div>
      <div className="products-recommendation">
        <div className=" products-recommendation-text">
          <h1>You May Also Like</h1>
        </div>
        <div className="products-recommendation-slider">
          <NewSlider slides={myImage}></NewSlider>
        </div>
      </div>
      <div className="divers-items">
        <div className="diver-item"></div>
        <div className="diver-item"></div>
        <div className="diver-item"></div>
      </div>
    </div>
  );
}
