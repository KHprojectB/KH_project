import React, {useContext} from 'react'

import CartContext from '../../store/cart-context'

const Cart = () => {

  const cartCtx = useContext(CartContext);

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <li>
          <h3>{item.title}</h3>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
    </div>
  )
}

export default Cart