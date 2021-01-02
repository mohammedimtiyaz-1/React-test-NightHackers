import React from "react";
import BusinessDesCard from "./BusinessDesCard";
import BusinessDesCard1 from "./BusinessDesCard1";
import BusinessDesCard2 from "./BusinessDesCard2";

function BusinessDescription() {
  return (
    <div className="business-card-container">
      <BusinessDesCard />
      <BusinessDesCard2 />
      <BusinessDesCard1 />
    </div>
  );
}

export default BusinessDescription;
