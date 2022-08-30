import React, {useState} from 'react'

import "./Test.css"

const Test = () => {


  return (
    <div className="test">
      <p className="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel dolorem numquam, a earum impedit in minima dolor voluptates
        expedita deserunt magni quaerat nemo quis illo! Dolore nemo error asperiores!
      </p>
      <div className="btn-con">
        <button className="open" onClick={openHandler}>open</button>
        <button className="close" onClick={closeHandler}>close</button>
      </div>
    </div>
  )
}

export default Test