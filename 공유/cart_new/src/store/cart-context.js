import React, { useEffect, useContext, useReducer } from 'react'
import reducer from './cart-reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 125,
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (isbn, price, books) => {
    dispatch({type: ADD_TO_CART, payload:{isbn, price, books}})
  }

  const removeItem = (isbn) => {

  }

  const toggleAmount = (isbn, value) => {}

  const clearCart = () => {}

  return (
    <CartContext.Provider value={{...state, addToCart, removeItem, toggleAmount, clearCart}}>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
