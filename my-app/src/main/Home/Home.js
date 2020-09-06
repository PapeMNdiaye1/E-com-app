/** @jsx jsx */

import { css, jsx } from "@emotion/core";

import Header from "./Header";
import Slider from "../Carousel/Slider";
import NewSlider from "../NewCarouse/NewSlider";
import topImages1 from "../img/chair_close_up_footwear_shoes_5634x3756.jpg";
import topImages2 from "../img/NIKE_sports_shoes_product_logo_poster_advertising_products_1nike_g_6000x4000.jpg";
import topImages3 from "../img/cliff_feet_man_mountain_outdoors_perspective_river_rocks_shoes_water_5760x3840.jpg";
import topImages4 from "../img/Watch_Chronometer_Ulysse_Nardin_blue_3840x2160.jpg";

import newSliderImage4 from "../img/A099-1045-view1.jpg";
import newSliderImage2 from "../img/A1211-3163-view1.jpg";
import newSliderImage3 from "../img/C2786-000-view1.jpg";
import newSliderImage7 from "../img/A099-897-view1.jpg";
import newSliderImage5 from "../img/A099-2878-view1.jpg";
import newSliderImage6 from "../img/A099-3005-view1.jpg";
import newSliderImage1 from "../img/S2751-3394-view1.jpg";
import diverItemImg1 from "../img/222e95d55509299a71e62f8d277e9754.jpg";
import diverItemImg2 from "../img/82e07f1cdf73c7bcf90ad63882614141.jpg";
import diverItemImg3 from "../img/011609886b06571155b5c42ede9b9c21.jpg";

const images = [
  `${topImages1}`,
  `${topImages2}`,
  `${topImages3}`,
  `${topImages4}`,
];

const myImage = [
  [`${newSliderImage1}`, `${newSliderImage2}`, `${newSliderImage3}`],
  [`${newSliderImage4}`, `${newSliderImage5}`, `${newSliderImage6}`],
  [`${newSliderImage7}`, `${newSliderImage1}`],
];

export default function Home() {
  const diverItemImgCSS = (diverItemImg) => css`
    background-image: url(${diverItemImg});
  `;

  return (
    <div className="Home">
      <Header></Header>
      <div className="the-home-slider-container">
        <Slider slides={images} autoPlay={false}></Slider>
        <dir className="top-slider-contain">
          <h1>The Staple</h1>
          <h4>Low profile performance with all-day comfort.</h4>
          <br />
          <div className="new-in-shop">New In Shop</div>
          <div className="mens-watches">Mens watches </div>
        </dir>
      </div>
      {/* ################################### */}
      <h2 className="shop-new-big-title">New Items</h2>
      <div className="shop-new">
        <div className="new-items">
          <div className="items-contain items-contain1">
            <div className="new-items-infos">
              <h1>Hat</h1>
              <br />
              <h2>Shop-New</h2>
            </div>
          </div>
        </div>
        <div className="new-items">
          <div className="items-contain items-contain2">
            <div className="new-items-infos">
              <h1>Watches</h1>
              <br />
              <h2>Shop-New</h2>
            </div>
          </div>
        </div>
        <div className="new-items">
          <div className="items-contain items-contain3">
            <div className="new-items-infos">
              <h1>Clothing & Accessories</h1>
              <br />
              <h2>Shop-New</h2>
            </div>
          </div>
        </div>
      </div>
      {/* ################################### */}
      <div className="products-recommendation">
        <div className=" products-recommendation-text">
          <h1>You May Also Like</h1>
        </div>
        <div className="products-recommendation-slider">
          <NewSlider slides={myImage}></NewSlider>
        </div>
      </div>
      <div className="divers-items">
        <div className="diver-item">
          <div
            className="diver-item-imgs"
            css={diverItemImgCSS(diverItemImg1)}
          ></div>
          <div className="divers-items-info"></div>
        </div>
        <div className="diver-item">
          <div className="divers-items-info"></div>
          <div
            className="diver-item-imgs"
            css={diverItemImgCSS(diverItemImg2)}
          ></div>
        </div>
        <div className="diver-item">
          <div
            className="diver-item-imgs"
            css={diverItemImgCSS(diverItemImg3)}
          ></div>
          <div className="divers-items-info"></div>
        </div>
      </div>
    </div>
  );
}
