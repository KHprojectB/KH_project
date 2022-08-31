import React, {useReducer} from 'react'
import CartContext from './cart-context'

const defaultCartState = {
  items: [],
}
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
    }; 
  }
  return defaultCartState;
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: "ADD", item: item});
  }
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: "REMOVE", id: id});
  }

  const cartContext = {
    items: cartState.items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider