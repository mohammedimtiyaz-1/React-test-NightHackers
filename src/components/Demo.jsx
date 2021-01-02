import React from "react";
import Vector from "./assets/vector";
import Text from "./Text";

function Demo() {
  return (
    <div className="demo">
      <Text
        main="Essential Mobile App Landing for Workspaces"
        sub=" A mobile app landing page is important and essential for right amount of
        information about your product. Start increasing your user base upon the
        launch of your product"
      />
      <button className="demoButton">
        <span className="demo-span">
          Explore Demos <Vector />
        </span>
      </button>
    </div>
  );
}

export default Demo;
