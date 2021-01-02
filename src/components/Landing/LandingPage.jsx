import React from "react";
import Courosel from "../Corousel";
import Demo from "../Demo";
import Business from "../Business/Business";

function LandingPage() {
  return (
    <div>
      <div className="container">
        <Courosel />
        <Demo />
        <Business />
        {/* <Clients /> */}
      </div>
    </div>
  );
}

export default LandingPage;
