import React from "react";
import Header from "./Header";
// import Slider from "../Carousel/Slider";
import NewSlider from "../NewCarouse/NewSlider";

const images = [
  "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
  "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
  "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
];

export default function Home() {
  return (
    <div className="Home">
      <Header></Header>
      <div className="the-home-slider-container">
        <NewSlider slides={images}></NewSlider>
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
        <div className="products-recommendation-slider"></div>
      </div>
    </div>
  );
}
