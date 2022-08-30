import React, { useState } from "react";

import "./Test.css";
import Modal from "../modal/Modal";

const Test = (props) => {

  return (
      <div className="test">
        <p className="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel dolorem numquam, a earum impedit in minima dolor voluptates
          expedita deserunt magni quaerat nemo quis illo! Dolore nemo error asperiores!
        </p>
        <div className="btn-con">
          <button className="open">
            open
          </button>
          <button className="close">
            close
          </button>
        </div>
      </div>
  );
};

export default Test;
