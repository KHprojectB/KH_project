import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import Auth from "./components/Auth";
import { Home, Products, SingleProduct, About, Cart, Error, Checkout, PrivateRoute } from "./pages";
import AdminPage from "./components/AdminPage";

function App() {

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="admin" element={<AdminPage></AdminPage>}></Route>
        <Route path="cart" element={<Cart></Cart>}></Route>
        <Route path="products" element={<Products></Products>}></Route>
        <Route path="products/:id" element={<SingleProduct></SingleProduct>}></Route>
        <Route path="checkout" element={<Checkout></Checkout>}></Route>
        <Route path="auth" element={<Auth></Auth>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
