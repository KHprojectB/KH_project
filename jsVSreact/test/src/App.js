import React, { Fragment, useState } from "react";

import Test from "./components/test/Test";
import Modal from "./components/modal/Modal";

const App = () => {

  const [showDetail, setShowDetail] = useState(true);
  const showDetailHandler = () => {
    setShowDetail(true);
  };
  const hideDetailHandler = () => {
    setShowDetail(false);
  }

  return (
    <Fragment>
      <button onClick={showDetailHandler}>OPEN</button>
      {showDetail && <Test onClose={hideDetailHandler}></Test>}
    </Fragment>
  );
};

export default App;
