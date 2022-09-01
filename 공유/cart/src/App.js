import React, { Fragment, useState } from "react";

import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

const dummyData = [
  {id: "e1", title: "product1"},
  {id: "e2", title: "product2"},
  {id: "e3", title: "product3"},
  {id: "e4", title: "product4"},
  {id: "e5", title: "product5"},
]

const App = () => {

  const [show, setShow] = useState(false);

  const showCartHandler = () => {
    setShow(true);
  }
  const hideCartHandler = () => {
    setShow(false);
  }

  return (
    <Fragment>
      <Products asdf={dummyData} onShowCart={showCartHandler}></Products>
      <Cart onHideCart={hideCartHandler}></Cart>
    </Fragment>
  );
};

export default App;
