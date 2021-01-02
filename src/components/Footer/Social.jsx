import React from "react";
import Brand from "../Brand";
import Social1 from "../assets/social1";
import Social2 from "../assets/socail2";
import Social3 from "../assets/socail3";

function Social() {
  return (
    <div className="social-container">
      <Brand />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Social2 />
        <Social1 />
        <Social3 />
      </div>
      <p style={{ fontWeight: "bold" }}>Copywright 2020 Soprano.ai</p>
    </div>
  );
}

export default Social;
