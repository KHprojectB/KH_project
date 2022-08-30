import React, {useState} from 'react'

import "./Test.css"

const Test = () => {

  const [toggle, setToggle] = useState(false);
  const openHandler = () => {
    setToggle(true);
  }
  const closeHandler = () => {
    setToggle(false);
  }

  return (
    <div className="test">
      {toggle && <p className="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel dolorem numquam, a earum impedit in minima dolor voluptates
        expedita deserunt magni quaerat nemo quis illo! Dolore nemo error asperiores!
      </p>}
      <div className="btn-con">
        <button className="open" onClick={openHandler}>open</button>
        <button className="close" onClick={closeHandler}>close</button>
      </div>
    </div>
  )
}

export default Test