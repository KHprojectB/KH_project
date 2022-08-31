import React, { useContext, useState } from "react";

import CartContext from "../../store/cart-context";

const Products = (props) => {
  const cartCtx = useContext(CartContext);
  const [index, setIndex] = useState(0);

  const nextHandler = () => {
    setIndex(index + 1);
  }

  const {title, id} = props.products[index];

  const submitHandler = (event) => {
    event.preventDefault();

    cartCtx.addItem({
      id: id,
      title: title,
    });
  };

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <form onSubmit={submitHandler}>
              <button onClick={props.onShowCart}>+ ADD</button>
            </form>
      </div>
      <button onClick={nextHandler}>next</button>
    </div>
  );
};

export default Products;
