import React from "react";
import Text from "../Text";
import BusinessDescription from "./BusinessDescription";
function BusinessJourney() {
  return (
    <div className="demo">
      <Text
        main="Start your business journey with Soprano"
        sub="Try Shopify for free, and explore all the tools and services you need to start, run, and grow your business."
      />
      <BusinessDescription />
      <button className="demoButton">Start Free Trail</button>
    </div>
  );
}

export default BusinessJourney;
