import React from "react";
import Text from "../Text";

function Subscription() {
  return (
    <div className="subscription-footer">
      <div>
        <Text
          main="Subscribe our newsletter"
          sub="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore"
        />
      </div>
      <div>
        <input
          style={{
            color: "white",
            background: "#C162E5",
            outline: "none",
            borderBottom: "2px solid white",
          }}
          type="text"
          placeholder="Email Address"
        />
        <button
          style={{
            background: "white",
            borderRadius: "10px",
            color: "#C162E5",
          }}
        >
          Get Access
        </button>
      </div>
    </div>
  );
}

export default Subscription;
