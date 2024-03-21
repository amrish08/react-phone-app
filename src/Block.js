import React from "react";
import blocklogo from "./Assets/Images/block-logo.png";

function block() {
  return (
    <img src={blocklogo} className="block-logo" width={1500} height={500}></img>
  )
}

export default block;