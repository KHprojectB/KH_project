import React, {useState, useContext} from "react";
import AuthContext from "./auth-context";
import { useCartContext } from "./cart_context";

const RentalContext = React.createContext({
  rentalList: {},
  cartBookId: [],
  // bookList: [],
  rental: (bookId, mbId) => {},
  returnBookId: (id) => {},
  clearBookId: () => {}
});

export const RentalContextProvider = (props) => {

  const authCtx = useContext(AuthContext);

  const [rentalList, setRentalList] = useState([]);
  const [rental, setRental] = useState({});
  const [cartBookId, setCartBookId] = useState([]);

  const rentalHandler = (bookId, mbId) => {
    if (mbId === authCtx.mbId) {
      setRental({bookId, mbId});
    }
  }
  
  const returnBookId = (id) => {
    cartBookId.push(id);
  }
  const clearBookId = () => {
    setCartBookId([]);
  }

  const contextValue = {
    rental: rentalHandler,
    rentalInfo: rental,
    cartBookId: cartBookId,
    clearBookId: clearBookId,
    returnBookId: returnBookId
  }

  return (
    <RentalContext.Provider value={contextValue}>
      {props.children}
    </RentalContext.Provider>
  )
}

export default RentalContext;

