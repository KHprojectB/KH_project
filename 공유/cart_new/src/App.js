import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Cart from './components/Cart/Cart'
import Products from './components/Products/Products'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <div>
            <Link to="/products">Products</Link>
          </div>
        }></Route>
        <Route path='products' element={<Products></Products>}></Route>
        <Route path='cart' element={<Cart></Cart>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App