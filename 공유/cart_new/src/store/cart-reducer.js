import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_price,
} from '../actions'

const cart_reducer = (state, action) => {

  if (action.type === ADD_TO_CART) {
    const {isbn,  price, books} = action.payload;
    const tempItem = state.cart.find((item) => (
      item.isbn === isbn
    ))

    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.isbn === isbn) {
          let newprice = cartItem.price + price;
          if (newprice > cartItem.max) {
            newprice = cartItem.max
          }
          return {...cartItem, price: newprice}
        }
        else {
          return cartItem;
        }
      })
    }
    else {
      const newItem = {
        isbn: isbn,
        name: books.title,
        price,
        image: books.thumbnail,
        price: books.price,
      }
      return {...state, cart:[...state.cart, newItem]}
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
