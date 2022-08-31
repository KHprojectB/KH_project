import React, { Fragment, useState } from "react";

import Test from "./components/test/Test";
import Modal from "./components/modal/Modal";

const App = () => {

  return (
    <Fragment>
      <button>OPEN</button>
      <Test></Test>
    </Fragment>
  );
};

export default App;
