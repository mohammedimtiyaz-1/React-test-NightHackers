import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class imgCarousel extends Component {
  render() {
    return (
      <div className="corousel">
        <Carousel>
          <div>
            <img src="./images/asset9.jpg" alt="asset1" />
          </div>
          <div>
            <img src="images/asset9.jpg" alt="asset1" />
          </div>
          <div>
            <img src="images/asset10.jpg" alt="asset1" />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default imgCarousel;
