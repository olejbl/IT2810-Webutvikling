import React from "react";
import Popup from "reactjs-popup"; // bruker npm install reactjs-popup --save
const NestedToolTip = () => (
    <Popup
    trigger={<button className="button"> Movie Title </button>}
    position="right top"
    on="hover"
  >
  </Popup>
);