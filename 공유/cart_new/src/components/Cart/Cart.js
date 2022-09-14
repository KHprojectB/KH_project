import React from 'react'
import { useCartContext } from '../../store/cart-context'

const Cart = () => {

  const {cart} = useCartContext();

  return (
    <div>
      {cart.map((item) => {
        return (
          <h2>{item.name}</h2>
        )
      })}
    </div>
  )
}

export default Cart