import React from "react";
import Text from "../Text";

function BusinessCards() {
  return (
    <div className="demo">
      <Text
        main="Explore our demos"
        sub="Explore our landing Page demos on different kind of topics. More Demos are coming soon."
      />
      <div className="cards-container">
        <div>
          <img src="./images/asset9.jpg" alt="asset1" />
          <p className="legend">Website Landing</p>
        </div>
        <div>
          <img src="images/asset10.jpg" alt="asset1" />
          <p className="legend">Modern App landing</p>
        </div>
      </div>
    </div>
  );
}

export default BusinessCards;
