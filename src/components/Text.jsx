import React from "react";

function Text(props) {
  return (
    <div>
      <p className="description-main">{props.main}</p>
      <p className="description">{props.sub}</p>
    </div>
  );
}

export default Text;
